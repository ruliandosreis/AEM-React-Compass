import React from 'react';
import SearchButton from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/SearchButton',
  component: SearchButton,
  argTypes: {
    fontSize:{
      control:{
        type:'number'
      },
      defaultValue: 18, 
    },
    text:{
      control:{
        type: 'text',
      },
      defaultValue:'Continuar',
    },
  },
  parameters:{
    docs:{
      page: Documentation,

    }
  }
};

const Template = (args) => <SearchButton {...args}/>;

export const Standard = Template.bind({});