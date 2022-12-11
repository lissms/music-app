import type { Meta, Story } from '@storybook/react';

import { Message } from '.';
import type { MessageProps } from './types';

export default {
  component: Message,
  title: 'Core/Message',
  args: {
    text: 'An error has occurred',

    onClick: () => {},
  },
} as Meta;

const Template: Story<MessageProps> = (args) => <Message {...args}></Message>;

export const Default = Template.bind({});
