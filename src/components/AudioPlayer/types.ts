import { SyntheticEvent } from 'react';
export interface ImageProps {
  image: string;
}

export type AudioPlayerProps = {
  isPlaying: boolean;
  url: string | undefined;
  id: number | undefined;
  image: string;
  handleClickPlay: (selectedId: number, url: string) => void;
};
export type Playing = {
  isPlaying?: boolean;
  image?: string;
};
