import Image from 'next/image';
import React from 'react';

import { Audio, Button, Container, ContainerPlay, Range } from './styles';
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
        <Image
          loader={myLoader}
          src="me"
          height={22}
          width={22}
          alt={'lens icon'}
        />
        <Audio ref={audioPlayer} src={url} />
        <Button onClick={() => handleClickPlay(id)}>play / pause</Button>
        <div>
          <Range type="range" />
        </div>
      </ContainerPlay>
    </Container>
  );
};
