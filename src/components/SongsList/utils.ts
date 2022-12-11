import { gql } from '@apollo/client';

import { Song } from './types';

const FAVORITE_KEY = 'idFavorite';

export const getSongsQuery = (
  name: string | number | readonly string[] | undefined,
) => {
  const SONGS_QUERY = gql`
    {
      songs(search: "${name}", sort: {}) {
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
  return SONGS_QUERY;
};

export const getMappedData = (songsList: Song[]) => {
  const localStorageList =
    (JSON.parse(String(localStorage.getItem(FAVORITE_KEY))) as number[]) || [];

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
  return mapperData;
};

export const removeFromFavoritesList = (selectedId: number) => {
  const favoriteIdList =
    (JSON.parse(String(localStorage.getItem(FAVORITE_KEY))) as number[]) || [];

  const filteredFavoriteList = favoriteIdList.filter((id) => id !== selectedId);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(filteredFavoriteList));
};

export const addToFavoriteList = (selectedId: number) => {
  const favoriteIdList =
    (JSON.parse(String(localStorage.getItem(FAVORITE_KEY))) as number[]) || [];

  favoriteIdList.push(selectedId);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteIdList));
};
