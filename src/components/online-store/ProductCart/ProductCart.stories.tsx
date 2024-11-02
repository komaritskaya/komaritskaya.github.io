import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductCart } from './ProductCart';

export default {
  title: 'Components/ProductCart',
  component: ProductCart,
} as ComponentMeta<typeof ProductCart>;

const Template: ComponentStory<typeof ProductCart> = (args) => <ProductCart {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Gaming Keyboard',
  price: 59.99,
  onRemove: () => alert('Item removed from cart'),
};
