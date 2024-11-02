import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddToCartButton } from './AddToCartButton';

export default {
  title: 'Components/AddToCartButton',
  component: AddToCartButton,
} as ComponentMeta<typeof AddToCartButton>;

const Template: ComponentStory<typeof AddToCartButton> = (args) => <AddToCartButton {...args} />;

export const EmptyCart = Template.bind({});
EmptyCart.args = {
  count: 0,
};

export const WithItems = Template.bind({});
WithItems.args = {
  count: 3,
};
