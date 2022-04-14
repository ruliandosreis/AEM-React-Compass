import React from 'react';
import {WhiteLogo} from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/WhiteLogo',
  component: WhiteLogo,
  parameters:{
    docs:{
      page: Documentation,
    },
  },
};

const Template = (args) => <WhiteLogo {...args}/>;

export const Standard = Template.bind({});