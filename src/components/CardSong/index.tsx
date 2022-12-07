import HeartAddIcon from '$/assets/icons/heart-add.svg';
import HeartIcon from '$/assets/icons/heart.svg';
import PauseIcon from '$/assets/icons/pause-white.svg';
import PlayIcon from '$/assets/icons/play.svg';
import React from 'react';

import {
  ButtonFavorite,
  ButtonPlay,
  Container,
  ContainerImage,
  ContainerInfoDateail,
  ContainerSong,
  Details,
  Duration,
  Genre,
  Information,
} from './styles';
import type { CardSongProps } from './types';

export const CardSong = ({
  image,
  name,
  description,
  genre,
  author,
  isFavorite,
  id,
  toggleFavorite,
  handleClickPlay,
  isPlaying,
}: CardSongProps) => (
  <Container>
    <ContainerSong>
      <ContainerImage image={image} />
      <ContainerInfoDateail>
        <Information>
          <p className="name">{name}</p>
          <p className="author">{author}</p>
          <p className="description">{description}</p>
        </Information>
        <Details>
          <ButtonPlay onClick={() => handleClickPlay(id)}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </ButtonPlay>
          <Duration>5 min</Duration>
          <Genre>
            <p className="genre">{genre}</p>
          </Genre>
        </Details>
      </ContainerInfoDateail>
    </ContainerSong>
    <ButtonFavorite onClick={() => toggleFavorite(id)}>
      {isFavorite ? <HeartIcon /> : <HeartAddIcon />}
    </ButtonFavorite>
  </Container>
);
