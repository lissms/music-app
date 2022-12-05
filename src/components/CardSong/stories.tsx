import type { Meta, Story } from '@storybook/react';

import { CardSong } from '.';
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

export default {
  component: CardSong,
  title: 'Core/CardSong',
  args: {
    isFavorite: false,
    image: data.image,
    name: data.name,
    description: data.description,
    genre: data.genre,
    author: data.author,
  },
} as Meta;

const Template: Story<CardSongProps> = (args) => (
  <CardSong {...args}></CardSong>
);

export const Default = Template.bind({});
