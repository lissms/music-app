import { AudioPlayer } from '$/components/AudioPlayer';
import { CardSong } from '$/components/CardSong';
import { Loader } from '$/components/Loader';
import { Message } from '$/components/Message';
import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

import { getSongsQuery } from './logic';
import { Container, List, Title } from './styles';
import type { Song, SongsListProps, UseQueryProps } from './types';
import { useManageTrackControls } from './useManageTrackControls';

export const SongsList = ({ songName }: SongsListProps) => {
  const {
    songs,
    setSongs,
    handleClickPlay,
    infoPlay,
    handleClickBack,
    handleClickNext,
  } = useManageTrackControls();

  const { data, loading, error } = useQuery<UseQueryProps>(
    getSongsQuery(songName),
  );

  useEffect(() => {
    const songsList = data?.songs?.songs as Song[];

    const localStorageList =
      (JSON.parse(String(localStorage.getItem('idFavorite'))) as number[]) ||
      [];

    const mapperData = songsList?.map((song) => ({
      audio: song.audio.url,
      author: song.author.name,
      description: song.description,
      genre: song.genre.toLowerCase().replace('_', ' '),
      id: song.id,
      image: song.image,
      songName: song.name,
      isFavorite: localStorageList.some((id) => id === song.id),
      isPlaying: false,
    }));
    setSongs(mapperData);
  }, [data]);

  //favorite
  const toggleFavorite = (selectedId: number) => {
    const modifiedSongsList = songs?.map((song) => {
      if (song.id === selectedId) {
        if (song.isFavorite) {
          const favoriteIdList =
            (JSON.parse(
              String(localStorage.getItem('idFavorite')),
            ) as number[]) || [];

          const filteredFavoriteList = favoriteIdList.filter(
            (id) => id !== selectedId,
          );
          localStorage.setItem(
            'idFavorite',
            JSON.stringify(filteredFavoriteList),
          );
        } else {
          const favoriteIdList =
            (JSON.parse(
              String(localStorage.getItem('idFavorite')),
            ) as number[]) || [];

          favoriteIdList.push(selectedId);
          localStorage.setItem('idFavorite', JSON.stringify(favoriteIdList));
        }

        return {
          ...song,
          isFavorite: !song.isFavorite,
        };
      } else {
        return song;
      }
    });

    setSongs(modifiedSongsList);
  };

  return (
    <Container>
      <Title>Featured songs</Title>
      {error && <Message text="An error has occurred" />}
      {songs?.length === 0 && loading === false ? (
        <Message text="No data found for resourse with given identifier" />
      ) : null}
      {loading ? (
        <Loader />
      ) : (
        <List>
          {songs?.map((song) => (
            <li key={song.id}>
              <CardSong
                image={song.image}
                name={song.songName}
                description={song.description}
                genre={song.genre}
                author={song.author}
                isFavorite={song.isFavorite}
                id={song.id}
                toggleFavorite={toggleFavorite}
                handleClickPlay={() =>
                  handleClickPlay(
                    song.id,
                    song.audio,
                    song.image,
                    song.isPlaying,
                    song.songName,
                    song.author,
                  )
                }
                isPlaying={song.isPlaying}
              />
            </li>
          ))}
        </List>
      )}
      <AudioPlayer
        isPlaying={infoPlay.isPlayingSong}
        url={infoPlay.url}
        id={infoPlay.selectedId}
        image={infoPlay.image}
        name={infoPlay.name}
        author={infoPlay.author}
        handleClickPlay={handleClickPlay}
        handleClickNext={handleClickNext}
        handleClickBack={handleClickBack}
      ></AudioPlayer>
    </Container>
  );
};
