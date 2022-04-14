import React from 'react';
import Clock from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/Clock',
  component: Clock,
  parameters:{
    docs:{
      page: Documentation,
    },
  },
};

const Template = (args) => <Clock {...args}/>;

export const Standard = Template.bind({});