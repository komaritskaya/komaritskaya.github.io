import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OperationShort } from './OperationShort';

export default {
  title: 'Components/OperationShort',
  component: OperationShort,
} as ComponentMeta<typeof OperationShort>;

const Template: ComponentStory<typeof OperationShort> = (args) => <OperationShort {...args} />;

export const Default = Template.bind({});
Default.args = {
  amount: 80,
  category: 'Transport',
  title: 'Taxi ride',
  description: 'Evening taxi ride from the city center to home',
};
