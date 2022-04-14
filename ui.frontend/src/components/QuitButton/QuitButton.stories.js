import React from 'react';
import QuitButton from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/QuitButton',
  component: QuitButton,
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
      defaultValue:'Sair',
    },
  },
  parameters:{
    docs:{
      page: Documentation,

    }
  }
};

const Template = (args) => <QuitButton {...args}/>;

export const Standard = Template.bind({});