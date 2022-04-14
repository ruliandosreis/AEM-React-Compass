import React from 'react';
import Climate from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/Climate',
  component: Climate,
  parameters:{
    docs:{
      page: Documentation,
    },
  },
};

const Template = (args) => <Climate {...args}/>;

export const Standard = Template.bind({});