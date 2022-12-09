import { AudioPlayer } from '$/components/AudioPlayer';
import { CardSong } from '$/components/CardSong';
import { ApolloError, gql, useQuery } from '@apollo/client';
import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

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
export interface InfoPlay {
  url: string;
  selectedId: number;
  isPlayingSong: boolean;
  image: string;
}

// TODO: control isLoading and error
// TODO: refactorizar pasar logica y ts a otro archivo
// TODO: STORYBOOK

const infoPlayInitialState = {
  url: '',
  selectedId: 0,
  isPlayingSong: false,
  image: '',
};

export const SongsList = ({}: SongsListProps) => {
  const [songs, setSongs] = useState<MappedSong[]>([]);
  const [infoPlay, setInfoPlay] = useState<InfoPlay>(infoPlayInitialState);
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
  ): void => {
    toggleSelectedSongIsPlaying(selectedId);
    setInfoPlay({
      selectedId,
      url,
      isPlayingSong: !isPlayingSong,
      image,
    });
  };
  const getNextIndex = (id: number | undefined): number => {
    const index = songs?.findIndex((song) => id === song.id);
    if (songs?.length === index + 1) {
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
    });
    toggleSelectedSongIsPlaying(songs[nextIndex]?.id || selectedId);
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
                handleClickPlay(song.id, song.audio, song.image, song.isPlaying)
              }
              isPlaying={song.isPlaying}
            />
          </li>
        ))}
      </List>
      <AudioPlayer
        isPlaying={infoPlay.isPlayingSong}
        url={infoPlay.url}
        id={infoPlay.selectedId}
        image={infoPlay.image}
        handleClickPlay={handleClickPlay}
        handleClickNext={handleClickNext}
        handleClickBack={handleClickBack}
      ></AudioPlayer>
    </Container>
  );
};
