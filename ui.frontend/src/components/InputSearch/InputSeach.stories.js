import React from 'react';
import InputSearch from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/InputSearch',
  component: InputSearch,
  parameters:{
    docs:{
      page: Documentation,
    }
  }
};

const Template = (args) => <InputSearch {...args}/>;

export const Standard = Template.bind({});