import { typography } from '$/styles/themes/typography';
import styled from 'styled-components';

import { Playing } from './types';

export const Container = styled.section<Playing>`
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
  padding: 0 0.75rem 0 1.5rem;
`;

export const ContainerPlay = styled.div<Playing>`
  justify-content: space-between;
  align-items: center;
  display: ${({ isPlaying }) => (isPlaying ? 'flex' : 'none')};
  width: 100%;
`;
export const ContainerProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressBar = styled.input`
  /* --bar-bg: #fabada;
  --seek-before-width: 100px;
  --seek-before-color: red;
  --knobby: green;
  --selected-Knobby: #000; */
  appearance: none;
  background-color: ${({ theme }) => theme.color.grayscale700};
  border-radius: 20px;
  position: relative;
  width: 476px;
  height: 4px;
  outline: none;
  /* & :before {
    content: '';
    height: 4px;
    width: var(--seek-before-width);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  } */
`;

export const Button = styled.button`
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.75rem;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ButtonBackNext = styled.button`
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.75rem;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ContainerInfoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`;
export const ContainerImage = styled.div<Playing>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ image }) => image && `url(${image})`};
  width: 48px;
  height: 48px;
  border-radius: 12px;
`;
export const ContainerInfo = styled.div`
  margin-left: 0.75rem;
  & .name {
    ${typography.body2};
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.weight.regular};
  }
  & .author {
    ${typography.caption};
    color: ${({ theme }) => theme.color.grayscale200};
    font-weight: ${({ theme }) => theme.weight.regular};
  }
`;
export const Time = styled.p`
  padding: 0 0.75rem;
  ${typography.caption};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.weight.regular};
`;
