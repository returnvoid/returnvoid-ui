import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VoidButton from '../components/voidbutton/VoidButton';

export default {
  title: 'Example/VoidButton',
  component: VoidButton,
} as ComponentMeta<typeof VoidButton>;

const Template: ComponentStory<typeof VoidButton> = (args) => <VoidButton {...args} />;

export const VoidButtonPrimary = Template.bind({});
VoidButtonPrimary.args = {
  label: 'Button123457',
  children: <div>okok</div>
};
