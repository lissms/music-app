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

const data = {
  image:
    'https://images.unsplash.com/photo-1622977265115-cce36eb43f18?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
  name: 'Baby One More Time',
  author: 'Ed Sheeran',
  description:
    'Faced with the trend of making the user spend as much time as possible in an app, our goal at Z1 is to create experiences that add up and that are built...',
  genre: 'Rock',
};

export const CardSong = ({
  image = data.image,
  name = data.name,
  description = data.description,
  genre = data.genre,
  author = data.author,
  isFavorite = false,
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
    <ButtonFavorite>
      {isFavorite ? <HeartIcon /> : <HeartAddIcon />}
    </ButtonFavorite>
  </Container>
);
