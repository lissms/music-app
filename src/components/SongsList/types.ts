export type SongsListProps = {
  songName: string | number | readonly string[] | undefined;
};
interface AudioProps {
  id: number;
  url: string;
}
interface AuthorProps {
  name: string;
}
interface SongDescriptions {
  audio: AudioProps;
  author: AuthorProps;
  description: string;
  genre: string;
  id: number;
  image: string;
  name: string;
}

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
