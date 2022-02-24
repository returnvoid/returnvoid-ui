import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VoidButton from '../components/voidbutton/VoidButton';

export default {
  title: 'General/VoidButton',
  component: VoidButton,
  argTypes: {
    label: {
      control: {
        type: 'text',
      }
    },
    mode: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary'],
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large'],
    },
    onClick: {
      action: 'clicked',
    }
  }
} as ComponentMeta<typeof VoidButton>;

const Template: ComponentStory<typeof VoidButton> = (args) => <VoidButton {...args} />;

export const VoidButtonPrimary = Template.bind({});
VoidButtonPrimary.args = {
  size: 'small',
  label: 'Primary',
  rounded: true,
};

export const VoidButtonSecondary = Template.bind({});
VoidButtonSecondary.args = {
  mode: 'secondary',
  size: 'medium',
  label: 'Secondary',
  rounded: true,
};

export const VoidButtonPrimaryBlock = Template.bind({});
VoidButtonPrimaryBlock.args = {
  mode: 'primary',
  size: 'large',
  label: 'Primary',
  rounded: true,
  block: true,
};
