export interface ImageProps {
  image: string;
}

export type AudioPlayerProps = {
  isPlaying: boolean | undefined;
  url: string | undefined;
  id: number | undefined;
  image: string;
  audioPlayer: React.MutableRefObject<undefined>;
  handleClickPlay: (selectedId: number, url: string) => void;
};
export type Playing = {
  isPlaying?: boolean;
  image?: string;
};
