import BackIcon from '$/assets/icons/back.svg';
import NextIcon from '$/assets/icons/next.svg';
import PauseIcon from '$/assets/icons/pause.svg';
import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { getFormattedTime } from './logic';
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
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  const togglePlay = (isSongLoaded: boolean, isSongPlaying: boolean) => {
    if (isSongLoaded) {
      if (isSongPlaying) {
        void audioPlayerRef.current?.play();
      } else {
        audioPlayerRef.current?.pause();
      }
    }
  };

  useEffect(() => {
    const isSongLoaded = duration > 0;
    togglePlay(isSongLoaded, isPlaying);
  }, [duration, isPlaying]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(audioPlayerRef.current?.currentTime || 0);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [audioPlayerRef]);

  const getNextSongAutomatically = useCallback(() => {
    if (audioPlayerRef.current?.ended) {
      handleClickNext(id);
    }
  }, [handleClickNext, audioPlayerRef, id]);

  useEffect(() => {
    getNextSongAutomatically();
  }, [audioPlayerRef.current?.ended, getNextSongAutomatically]);

  const handleLoadedMetadata = (event: SyntheticEvent) => {
    const target = event.target as HTMLAudioElement;
    setDuration(target.duration);
  };

  const onChangePlayingBar = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    audioPlayerRef.current.currentTime = parseInt(target.value);
    void audioPlayerRef.current?.play();
  };

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
