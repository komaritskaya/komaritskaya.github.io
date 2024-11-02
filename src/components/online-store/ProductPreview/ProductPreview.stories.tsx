import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductPreview } from './ProductPreview';

export default {
  title: 'Components/ProductPreview',
  component: ProductPreview,
} as ComponentMeta<typeof ProductPreview>;

const Template: ComponentStory<typeof ProductPreview> = (args) => <ProductPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  price: 29.99,
  image: 'https://via.placeholder.com/100',
  title: 'Wireless Mouse',
  description: 'A high-quality wireless mouse with ergonomic design and long battery life.',
};
