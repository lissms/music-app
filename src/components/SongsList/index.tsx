import { CardSong } from '$/components/CardSong';
import { gql, useQuery } from '@apollo/client';
import React from 'react';

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
export const SongsList = ({}: SongsListProps) => {
  const { data, loading, error } = useQuery(SONGS_QUERY);

  const mapperData = () =>
    data?.songs?.songs.map((song) => ({
      audio: song.audio.url,
      autor: song.author.name,
      description: song.description,
      genre: song.genre,
      id: song.id,
      image: song.image,
      songName: song.name,
      isFavorite: false,
    }));

  console.log('mapperData', mapperData());
  console.log('data1', data?.songs?.songs);
  console.log('loading', loading);
  console.log('error', error);

  const toggleFavorite = (isTheSelectedId: number) => isTheSelectedId;

  return (
    <Container>
      <Title>Featured songs</Title>

      {mapperData()?.map((item) => (
        <div style={{ width: '100%' }} key={item.id}>
          <CardSong
            image={item.image}
            name={item.name}
            description={item.description}
            genre={item.genre}
            author={item.author}
            isFavorite={false}
            id={item.id}
            toggleFavorite={toggleFavorite}
          />
        </div>
      ))}
    </Container>
  );
};
