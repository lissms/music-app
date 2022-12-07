import React from 'react';

import { Container } from './styles';
import type { AudioPlayerProps } from './types';

export const AudioPlayer = ({ isPlaying = true }: AudioPlayerProps) => (
  <Container isPlaying={isPlaying}>
    <audio src="https://d2s139ebbsksc4.cloudfront.net/Noel.mp3"></audio>
    <button>play / pause</button>
    <div>
      <input type="range" />
    </div>
  </Container>
);
