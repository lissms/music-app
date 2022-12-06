import { CardSong } from '$/components/CardSong';
import { ApolloError, gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { Container, Title } from './styles';
import type { SongsListProps } from './types';

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
  data: unknown;
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
interface MappedSong {
  audio: string;
  author: string;
  description: string;
  genre: string;
  id: number;
  image: string;
  songName: string;
  isFavorite: boolean;
}

export const SongsList = ({}: SongsListProps) => {
  const [songs, setSongs] = useState<MappedSong[]>([]);
  const { data, loading, error } = useQuery<UseQueryProps>(SONGS_QUERY);

  useEffect(() => {
    const songsList = data?.songs?.songs as Song[];
    const mapperData = songsList?.map((song) => ({
      audio: song.audio.url,
      author: song.author.name,
      description: song.description,
      genre: song.genre,
      id: song.id,
      image: song.image,
      songName: song.name,
      isFavorite: false,
    }));
    setSongs(mapperData);
  }, [data]);

  console.log('Songs', songs);
  console.log('data1', data);
  console.log('loading', loading);
  console.log('error', error);

  //   const toggleFavorite = (isTheSelectedId: number) => {
  //     const modifiedSongsList = songs?.map((song) => ({
  //       ...song,
  //       isFavorite: song.id === isTheSelectedId,
  //     }));
  //     setSongs(modifiedSongsList);
  //   };

  const toggleFavorite = (isTheSelectedId: number) => {
    const modifiedSongsList = songs?.map((song) =>
      song.id === isTheSelectedId
        ? {
            ...song,
            isFavorite: !song.isFavorite,
          }
        : song,
    );
    setSongs(modifiedSongsList);
  };

  console.log('songs', songs);

  return (
    <Container>
      <Title>Featured songs</Title>

      {songs?.map((item) => (
        <div style={{ width: '100%' }} key={item.id}>
          <CardSong
            image={item.image}
            name={item.songName}
            description={item.description}
            genre={item.genre}
            author={item.author}
            isFavorite={item.isFavorite}
            id={item.id}
            toggleFavorite={toggleFavorite}
          />
        </div>
      ))}
    </Container>
  );
};
