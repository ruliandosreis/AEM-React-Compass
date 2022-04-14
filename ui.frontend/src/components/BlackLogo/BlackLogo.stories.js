import React from 'react';
import {BlackLogo} from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/BlackLogo',
  component: BlackLogo,
  parameters:{
    docs:{
      page: Documentation,
    },
  },
};

const Template = (args) => <BlackLogo {...args}/>;

export const Standard = Template.bind({});