import React from 'react';
import { CurrencySelector } from './CurrencySelector';

export default { title: 'Components/CurrencySelector', component: CurrencySelector };

const Template = (args) => <CurrencySelector {...args} />;
export const Default = Template.bind({});
Default.args = { label: 'Moeda Base', options: ['USD','EUR'], onChange: () => {} };