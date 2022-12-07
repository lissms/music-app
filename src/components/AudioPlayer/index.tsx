import React, { useRef, useState } from 'react';

import { Container } from './styles';
import type { AudioPlayerProps } from './types';

export const AudioPlayer = ({ isPlaying }: AudioPlayerProps) => {
  const [isTheMusicSounds, setIsTheMusicSounds] = useState(isPlaying);

  const audioPlayer = useRef();

  console.log('isTheMusicSounds', isTheMusicSounds);
  console.log('isPlayingProps', isPlaying);

  const togglePlayPause = () => {
    setIsTheMusicSounds(!isTheMusicSounds);
    !isTheMusicSounds
      ? audioPlayer.current.play()
      : audioPlayer.current.pause();
  };
  return (
    <Container isPlaying={isPlaying}>
      <audio
        ref={audioPlayer}
        src="https://d2s139ebbsksc4.cloudfront.net/Noel.mp3"
      ></audio>
      <button onClick={togglePlayPause}>play / pause</button>
      <div>
        <input type="range" />
      </div>
    </Container>
  );
};
