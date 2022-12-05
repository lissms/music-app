import HeartAddIcon from '$/assets/icons/heart-add.svg';
import HeartIcon from '$/assets/icons/heart.svg';
import PlayIcon from '$/assets/icons/play.svg';
import React from 'react';

import {
  ButtonFavorite,
  ButtonPlay,
  Container,
  ContainerImage,
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
}: CardSongProps) => (
  <Container>
    <ContainerSong>
      <ContainerImage image={image} />
      <div style={{ paddingLeft: '1.25rem' }}>
        <Information>
          <p className="name">{name}</p>
          <p className="author">{author}</p>
          <p className="description">{description}</p>
        </Information>
        <Details>
          <ButtonPlay>
            <PlayIcon />
          </ButtonPlay>
          <Duration>5 min</Duration>
          <Genre>
            <p className="genre">{genre}</p>
          </Genre>
        </Details>
      </div>
    </ContainerSong>
    <ButtonFavorite onClick={() => toggleFavorite(id)}>
      {isFavorite ? <HeartIcon /> : <HeartAddIcon />}
    </ButtonFavorite>
  </Container>
);
