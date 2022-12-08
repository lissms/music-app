import BackIcon from '$/assets/icons/back.svg';
import NextIcon from '$/assets/icons/next.svg';
import PauseIcon from '$/assets/icons/pause.svg';
import Image from 'next/image';
import React from 'react';

import {
  Audio,
  Button,
  ButtonBackNext,
  Container,
  ContainerImage,
  ContainerInfo,
  ContainerInfoImage,
  ContainerPlay,
  Range,
} from './styles';
import type { AudioPlayerProps } from './types';

export const AudioPlayer = ({
  isPlaying,
  url,
  id,
  image,
  audioPlayer,
  handleClickPlay,
}: AudioPlayerProps) => (
  // const myLoader = ({ src, width, quality }) =>
  //   `${image}${src}?w=${width}&q=${quality || 75}`;
  <Container isPlaying={isPlaying}>
    <ContainerPlay isPlaying={isPlaying}>
      <ContainerInfoImage>
        <ContainerImage image={image} />

        <ContainerInfo>
          <p className="name">Ed sheran</p>
          <p className="author">Cantante de pop</p>
        </ContainerInfo>
      </ContainerInfoImage>

      <Audio ref={audioPlayer} src={url} />
      <ButtonBackNext onClick={() => handleClickPlay(id)}>
        <BackIcon />
      </ButtonBackNext>
      <Button onClick={() => handleClickPlay(id)}>
        <PauseIcon />
      </Button>
      <ButtonBackNext onClick={() => handleClickPlay(id)}>
        <NextIcon />
      </ButtonBackNext>
      <div>
        <Range type="range" />
      </div>
    </ContainerPlay>
  </Container>
);
