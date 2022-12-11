import BackIcon from '$/assets/icons/back.svg';
import NextIcon from '$/assets/icons/next.svg';
import PauseIcon from '$/assets/icons/pause.svg';

import { useAudioPlayer } from './hooks';
import {
  Button,
  ButtonBackNext,
  Container,
  ContainerButton,
  ContainerButtonProgressBar,
  ContainerImage,
  ContainerInfo,
  ContainerInfoImage,
  ContainerPlay,
  ContainerProgressBar,
  ProgressBar,
  Time,
} from './styles';
import type { AudioPlayerProps } from './types';
import { getFormattedTime } from './utils';

export const AudioPlayer = ({
  isPlaying,
  url,
  id,
  image,
  name,
  author,
  handleClickPlay,
  handleClickNext,
  handleClickBack,
}: AudioPlayerProps) => {
  const {
    duration,
    currentTime,
    audioPlayerRef,
    handleLoadedMetadata,
    onChangePlayingBar,
  } = useAudioPlayer(isPlaying, id, handleClickNext);

  return (
    <Container isPlaying={isPlaying}>
      <ContainerPlay isPlaying={isPlaying}>
        <ContainerInfoImage>
          <ContainerImage image={image} />
          <ContainerInfo>
            <p className="name">{name}</p>
            <p className="author">{author}</p>
          </ContainerInfo>
        </ContainerInfoImage>

        <ContainerButtonProgressBar>
          <audio
            ref={audioPlayerRef}
            src={url}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <ContainerButton>
            <ButtonBackNext onClick={() => handleClickBack(id)}>
              <BackIcon />
            </ButtonBackNext>
            <Button
              onClick={() =>
                handleClickPlay(id, url, image, isPlaying, name, author)
              }
            >
              <PauseIcon />
            </Button>
            <ButtonBackNext onClick={() => handleClickNext(id)}>
              <NextIcon />
            </ButtonBackNext>
          </ContainerButton>
          <ContainerProgressBar>
            <Time>{getFormattedTime(currentTime)}</Time>
            <ProgressBar
              type="range"
              value={currentTime}
              max={duration}
              onChange={onChangePlayingBar}
            />
            <Time>{getFormattedTime(duration)}</Time>
          </ContainerProgressBar>
        </ContainerButtonProgressBar>
      </ContainerPlay>
    </Container>
  );
};
