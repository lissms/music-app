import { typography } from '$/styles/themes/typography';
import { from } from '$/styles/utils/responsive';
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
export const ContainerInfoDateail = styled.div`
  padding-left: 1.25rem;
`;

export const ContainerImage = styled.div<ImageProps>`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 0.75rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ image }) => image && `url(${image})`};
`;

export const Information = styled.div`
  width: 25.688rem;
  height: 8.75rem;
  padding: 0 1.25rem 0 0;
  ${from['mobile']} {
    width: 37.688rem;
    height: 5.75rem;
    overflow: scroll;
    padding: 0;
  }

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
  justify-content: flex-start;
  align-items: center;
  display: flex;
  height: 2rem;
  margin-top: 0.75rem;
`;
export const Duration = styled.p`
  ${typography.caption};
  color: ${({ theme }) => theme.color.grayscale700};
  font-weight: ${({ theme }) => theme.weight.regular};
  margin-right: 0.75rem;
`;

export const Genre = styled.div`
  border-radius: 2.938rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.color.malibu100};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
  padding: 0.25rem 0.5rem;
  & .genre {
    ${typography.caption};
    color: ${({ theme }) => theme.color.grayscale900};
    font-weight: ${({ theme }) => theme.weight.regular};
    text-transform: capitalize;
  }
`;
export const ButtonPlay = styled.button`
  background-color: ${({ theme }) => theme.color.grayscale900};
  height: 2rem;
  width: 2rem;
  border-radius: 2.75rem;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
`;
export const ButtonFavorite = styled.button`
  height: 1.25rem;
  width: 1.25rem;
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
