import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OperationLong } from './OperationLong';

export default {
  title: 'Components/OperationLong',
  component: OperationLong,
} as ComponentMeta<typeof OperationLong>;

const Template: ComponentStory<typeof OperationLong> = (args) => <OperationLong {...args} />;

export const Default = Template.bind({});
Default.args = {
  amount: 150,
  category: 'Food',
  title: 'Lunch at the restaurant',
  description: 'A great meal with colleagues at a nice restaurant near the office',
  date: '2024-11-01',
};
