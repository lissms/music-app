export interface ImageProps {
  image: string;
}

export type CardSongProps = {
  image: string;
  name: string;
  description: string;
  genre: string;
  author: string;
  isFavorite: boolean;
  id: number;
  toggleFavorite: (isSelectedId: number) => void;
};
