import PauseIcon from '$/assets/icons/pause.svg';
import Image from 'next/image';
import React from 'react';

import {
  Audio,
  Button,
  Container,
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
}: AudioPlayerProps) => {
  const myLoader = ({ src, width, quality }) =>
    `${image}${src}?w=${width}&q=${quality || 75}`;
  return (
    <Container isPlaying={isPlaying}>
      <ContainerPlay isPlaying={isPlaying}>
        <ContainerInfoImage>
          <Image
            style={{ borderRadius: 12 }}
            loader={myLoader}
            src="me"
            height={48}
            width={48}
            alt={'lens icon'}
            priority={true}
          />
          <ContainerInfo>
            <p className="name">Ed sheran</p>
            <p className="author">Cantante de pop</p>
          </ContainerInfo>
        </ContainerInfoImage>

        <Audio ref={audioPlayer} src={url} />
        <Button onClick={() => handleClickPlay(id)}>
          <PauseIcon></PauseIcon>
        </Button>
        <div>
          <Range type="range" />
        </div>
      </ContainerPlay>
    </Container>
  );
};
