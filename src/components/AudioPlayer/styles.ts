import { typography } from '$/styles/themes/typography';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

import { Playing } from './types';

export const Container = styled.section<Playing>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  transform: translateY(${({ isPlaying }) => (isPlaying ? '0' : '5rem')});
  transition: all 1s;
  left: 0;
  height: 5rem;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  background-color: ${({ theme }) => theme.color.grayscale900};
  padding: 0 0.75rem 0 1.5rem;
  ${from['mobile']} {
    position: fixed;
    bottom: 0;
    left: 0;
  }
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
  -webkit-appearance: none;
  margin-right: 15px;
  width: 200px;
  height: 7px;
  background: ${({ theme }) => theme.color.grayscale700};
  border-radius: 5px;
  background-image: linear-gradient(
    ${({ theme }) => theme.color.malibu500},
    ${({ theme }) => theme.color.malibu500}
  );
  background-size: ${({ value, max }) =>
      `${(Number(value) * 100) / Number(max)}%`},
    100%;
  background-repeat: no-repeat;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.white};
    cursor: ew-resize;

    transition: background 0.2s ease-in-out;
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  ${from['mobile']} {
    width: 29.75rem;
  }
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
  &:hover,
  &:focus {
    animation: pulse 1s;
    box-shadow: 0 0 0 0.75em ${({ theme }) => theme.color.grayscale700};
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--hover);
    }
  }
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
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
`;
export const ContainerButton = styled.div`
  width: 8.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
