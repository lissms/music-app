import { AudioPlayer } from '$/components/AudioPlayer';
import { CardSong } from '$/components/CardSong';
import { Loader } from '$/components/Loader';
import { Message } from '$/components/Message';
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { getSongsQuery } from './logic';
import { Container, List, Title } from './styles';
import type {
  InfoPlay,
  MappedSong,
  Song,
  SongsListProps,
  UseQueryProps,
} from './types';

const infoPlayInitialState = {
  url: '',
  selectedId: 0,
  isPlayingSong: false,
  image: '',
  name: '',
  author: '',
};

export const SongsList = ({ songName }: SongsListProps) => {
  const [songs, setSongs] = useState<MappedSong[]>([]);
  const [infoPlay, setInfoPlay] = useState<InfoPlay>(infoPlayInitialState);
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

  const toggleSelectedSongIsPlaying = (selectedId: number) => {
    setSongs(
      songs?.map((song) =>
        song.id === selectedId
          ? {
              ...song,
              isPlaying: !song.isPlaying,
            }
          : {
              ...song,
              isPlaying: false,
            },
      ),
    );
  };

  const handleClickPlay = (
    selectedId: number,
    url: string,
    image: string,
    isPlayingSong: boolean,
    name: string,
    author: string,
  ): void => {
    toggleSelectedSongIsPlaying(selectedId);
    setInfoPlay({
      selectedId,
      url,
      isPlayingSong: !isPlayingSong,
      image,
      name,
      author,
    });
  };

  const getNextIndex = (id: number | undefined): number => {
    const index = songs?.findIndex((song) => id === song.id);
    if (songs.length === index + 1) {
      return 0;
    } else {
      return index + 1;
    }
  };
  const getBackIndex = (id: number | undefined): number => {
    const index = songs?.findIndex((song) => id === song.id);
    if (index === 0) {
      return songs?.length - 1;
    } else {
      return index - 1;
    }
  };

  const handleClickBack = (selectedId: number): void => {
    const backIndex = getBackIndex(selectedId);
    setInfoPlay({
      selectedId: songs[backIndex]?.id as number,
      url: songs[backIndex]?.audio as string,
      image: songs[backIndex]?.image as string,
      isPlayingSong: true,
      name: songs[backIndex]?.songName as string,
      author: songs[backIndex]?.author as string,
    });
    toggleSelectedSongIsPlaying(songs[backIndex]?.id || selectedId);
  };

  const handleClickNext = (selectedId: number): void => {
    const nextIndex = getNextIndex(selectedId);
    setInfoPlay({
      selectedId: songs[nextIndex]?.id as number,
      url: songs[nextIndex]?.audio as string,
      image: songs[nextIndex]?.image as string,
      isPlayingSong: true,
      name: songs[nextIndex]?.songName as string,
      author: songs[nextIndex]?.author as string,
    });
    toggleSelectedSongIsPlaying(songs[nextIndex]?.id || selectedId);
  };

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
