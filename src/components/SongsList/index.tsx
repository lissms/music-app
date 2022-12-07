import { AudioPlayer } from '$/components/AudioPlayer';
import { CardSong } from '$/components/CardSong';
import { ApolloError, gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { Container, List, Title } from './styles';
import type { Data, SongsListProps } from './types';

const SONGS_QUERY = gql`
  {
    songs(search: "", sort: {}) {
      pageMeta {
        pages
        total
      }
      songs {
        description
        genre
        id
        image
        name
        audio {
          id
          url
        }
        author {
          name
        }
      }
    }
  }
`;

interface UseQueryProps {
  data: Data;
  loading: boolean;
  error: ApolloError | undefined;
}
interface AudioProps {
  id: number;
  url: string;
}
interface AuthorProps {
  name: string;
}
interface Song {
  audio: AudioProps;
  author: AuthorProps;
  description: string;
  genre: string;
  id: number;
  image: string;
  name: string;
}
export interface MappedSong {
  audio: string;
  author: string;
  description: string;
  genre: string;
  id: number;
  image: string;
  songName: string;
  isFavorite: boolean;
  isPlaying: boolean;
}

// TODO: control isLoading and error
// TODO: refactorizar pasar logica y ts a otro archivo
// TODO: STORYBOOK

export const SongsList = ({}: SongsListProps) => {
  const [songs, setSongs] = useState<MappedSong[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { data } = useQuery<UseQueryProps>(SONGS_QUERY);

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

  console.log('isPlaying', isPlaying);

  const togglePlayPause = (selectedId: number) => {
    setSongs(
      songs?.map((song) =>
        song.id === selectedId
          ? {
              ...song,
              isPlaying: !song.isPlaying,
            }
          : song,
      ),
    );
  };

  const handleClickPlay = (selectedId: number): void => {
    togglePlayPause(selectedId);
    const prevState = songs?.some((song) => song.isPlaying === true);
    setIsPlaying(!prevState);
  };

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
      <List>
        {songs?.map((item) => (
          <li key={item.id}>
            <CardSong
              image={item.image}
              name={item.songName}
              description={item.description}
              genre={item.genre}
              author={item.author}
              isFavorite={item.isFavorite}
              id={item.id}
              toggleFavorite={toggleFavorite}
              handleClickPlay={handleClickPlay}
              isPlaying={item.isPlaying}
            />
          </li>
        ))}
      </List>
      <AudioPlayer isPlaying={isPlaying}></AudioPlayer>
    </Container>
  );
};
