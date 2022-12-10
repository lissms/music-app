import type { Meta, Story } from '@storybook/react';

import { AudioPlayer } from '.';
import type { AudioPlayerProps } from './types';

const data = {
  image:
    'https://images.unsplash.com/photo-1622977265115-cce36eb43f18?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
  name: 'Baby One More Time',
  author: 'Ed Sheeran',
  description:
    'Faced with the trend of making the user spend as much time as possible in an app, our goal at Z1 is to create experiences that add up and that are built...',
  url: 'https://d2s139ebbsksc4.cloudfront.net/Noel.mp3',
  id: 17,
};
export default {
  component: AudioPlayer,
  title: 'Core/AudioPlayer',
  args: {
    isPlaying: true,
    url: data.url,
    id: data.id,
    image: data.image,
    name: data.name,
    author: data.author,
    handleClickPlay: () => {},
    handleClickNext: () => {},
    handleClickBack: () => {},
  },
} as Meta;

const Template: Story<AudioPlayerProps> = (args) => (
  <AudioPlayer {...args}></AudioPlayer>
);

export const Default = Template.bind({});
