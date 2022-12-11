import React from 'react';

import { Container, Text } from './styles';
import type { MessageProps } from './types';

export const Message = ({ text }: MessageProps) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);
