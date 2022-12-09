export interface ImageProps {
  image: string;
}

export type AudioPlayerProps = {
  isPlaying: boolean;
  url: string;
  id: number;
  image: string;
  handleClickPlay: (
    selectedId: number,
    url: string,
    image: string,
    isPlayingSong: boolean,
  ) => void;
  handleClickNext: (selectedId: number) => void;
  handleClickBack: (selectedId: number) => void;
};
export type Playing = {
  isPlaying?: boolean;
  image?: string;
};
