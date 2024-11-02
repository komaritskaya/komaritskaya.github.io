import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductFull } from './ProductFull';

export default {
  title: 'Components/ProductFull',
  component: ProductFull,
} as ComponentMeta<typeof ProductFull>;

const Template: ComponentStory<typeof ProductFull> = (args) => <ProductFull {...args} />;

export const Default = Template.bind({});
Default.args = {
  price: 79.99,
  image: 'https://via.placeholder.com/200',
  category: 'Electronics',
  title: 'Bluetooth Headphones',
  description: 'Premium Bluetooth headphones with noise cancellation and immersive sound.',
};
