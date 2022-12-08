export interface ImageProps {
  image: string;
}

export type AudioBarProps = {
  image: string;
  children: void;
  isPlaying?: boolean;
};
export type Playing = {
  isPlaying: boolean;
};
