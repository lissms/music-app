import Image from 'next/image';
import React from 'react';

import { Container, ContainerPlay } from './styles';
import type { AudioBarProps } from './types';

export const AudioBar = ({ isPlaying, image, children }: AudioBarProps) => {
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
        {children}
      </ContainerPlay>
    </Container>
  );
};
