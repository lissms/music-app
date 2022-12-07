import styled from 'styled-components';

import { AudioPlayerProps } from './types';

export const Container = styled.section<AudioPlayerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${({ isPlaying }) => (isPlaying ? '5rem' : '0')};
  width: 100%;
  border-radius: 16px 16px 0px 0px;
  background-color: ${({ theme }) => theme.color.grayscale900};
  padding: 0 1.5rem;
`;
