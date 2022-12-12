import { ApolloError } from '@apollo/client';

export type SongsListProps = {
  songName: string | number | readonly string[] | undefined;
};

export type SongDescriptions = {
  audio: AudioProps;
  author: AuthorProps;
  description: string;
  genre: string;
  id: number;
  image: string;
  name: string;
};

export type PageMeta = {
  pages: number;
  total: number;
};
export type Songs = {
  pageMeta: PageMeta;
  songs: SongDescriptions;
};
export type Data = {
  songs: Songs;
};

export type UseQueryProps = {
  songs: {
    pageMeta: PageMeta;
    songs: SongDescriptions[];
  };
  loading: boolean;
  error: ApolloError | undefined;
};
export type AudioProps = {
  id: number;
  url: string;
};
export type AuthorProps = {
  name: string;
};
export type Song = {
  audio: AudioProps;
  author: AuthorProps;
  description: string;
  genre: string;
  id: number;
  image: string;
  name: string;
};
export type MappedSong = {
  audio: string;
  author: string;
  description: string;
  genre: string;
  id: number;
  image: string;
  songName: string;
  isFavorite: boolean;
  isPlaying: boolean;
};
export type InfoPlay = {
  url: string;
  selectedId: number;
  isPlayingSong: boolean;
  image: string;
  name: string;
  author: string;
};
