import HeartAddIcon from '$/assets/icons/heart-add.svg';
import HeartIcon from '$/assets/icons/heart.svg';
import PauseIcon from '$/assets/icons/pause-white.svg';
import React from 'react';

import { Container, Text } from './styles';
import type { MessageProps } from './types';

export const Message = ({ text }: MessageProps) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);
