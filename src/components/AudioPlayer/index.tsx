import BackIcon from '$/assets/icons/back.svg';
import NextIcon from '$/assets/icons/next.svg';
import PauseIcon from '$/assets/icons/pause.svg';
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';

import {
  Button,
  ButtonBackNext,
  Container,
  ContainerImage,
  ContainerInfo,
  ContainerInfoImage,
  ContainerPlay,
  ContainerProgressBar,
  ProgressBar,
  Time,
} from './styles';
import type { AudioPlayerProps } from './types';

const getFormattedTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formmatedMinutes = minutes > 9 ? minutes : `0${minutes}`;
  const formmatedSeconds = seconds > 9 ? seconds : `0${seconds}`;

  return `${formmatedMinutes}:${formmatedSeconds}`;
};

export const AudioPlayer = ({
  isPlaying,
  url,
  id,
  image,
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
            <p className="name">Ed sheran</p>
            <p className="author">Cantante de pop</p>
          </ContainerInfo>
        </ContainerInfoImage>

        <audio
          ref={audioPlayerRef}
          src={url}
          onLoadedMetadata={handleLoadedMetadata}
        />
        <ButtonBackNext onClick={() => handleClickBack(id)}>
          <BackIcon />
        </ButtonBackNext>
        <Button onClick={() => handleClickPlay(id, url, image, isPlaying)}>
          <PauseIcon />
        </Button>
        <ButtonBackNext onClick={() => handleClickNext(id)}>
          <NextIcon />
        </ButtonBackNext>
        <ContainerProgressBar>
          <Time>{getFormattedTime(currentTime)}</Time>
          <ProgressBar
            type="range"
            defaultValue={0}
            value={currentTime}
            max={duration}
            onChange={onChangePlayingBar}
          />
          <Time>{getFormattedTime(duration)}</Time>
        </ContainerProgressBar>
      </ContainerPlay>
    </Container>
  );
};
