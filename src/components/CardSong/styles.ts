import { typography } from '$/styles/themes/typography';
import styled from 'styled-components';

import { ImageProps } from './types';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
export const ContainerSong = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const ContainerImage = styled.div<ImageProps>`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 0.75rem;
  background-image: ${({ image }) => image && `url(${image})`};
`;

export const Information = styled.div`
  width: 37.688rem;
  height: 5.75rem;
  & p {
    margin-bottom: 0.25rem;
  }
  & .name {
    ${typography.body};
    color: ${({ theme }) => theme.color.grayscale900};
    font-weight: ${({ theme }) => theme.weight.bold};
  }
  & .author {
    ${typography.body2};
    color: ${({ theme }) => theme.color.grayscale700};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
  & .description {
    ${typography.body2};
    color: ${({ theme }) => theme.color.grayscale700};
    font-weight: ${({ theme }) => theme.weight.regular};
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 8.125rem;
  height: 2rem;
  margin-top: 12px;
`;
export const Duration = styled.p`
  color: red;
  ${typography.caption};
  color: ${({ theme }) => theme.color.grayscale700};
  font-weight: ${({ theme }) => theme.weight.regular};
`;

export const Genre = styled.div`
  border-radius: 2.938rem;
  width: 2.688rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.color.malibu100};
  display: flex;
  justify-content: center;
  align-items: center;
  & .genre {
    ${typography.caption};
    color: ${({ theme }) => theme.color.grayscale900};
    font-weight: ${({ theme }) => theme.weight.regular};
  }
`;
export const ButtonPlay = styled.button`
  background-color: ${({ theme }) => theme.color.grayscale900};
  height: 32px;
  width: 32px;
  border-radius: 44px;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonFavorite = styled.button`
  height: 20px;
  width: 20px;
  color: inherit;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
