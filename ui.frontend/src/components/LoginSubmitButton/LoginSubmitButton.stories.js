import React from 'react';
import LoginSubmitButton from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/LoginSubmitButton',
  component: LoginSubmitButton,
  argTypes: {
    text:{
      control:{
        type: 'text',
      },
      defaultValue: 'Continuar',
    },
    fontSize:{
      control:{
        type:'number'
      },
      defaultValue: 18, 
    },
  },
  parameters:{
    docs:{
      page: Documentation,

    }
  }
};

const Template = (args) => <LoginSubmitButton {...args}/>;

export const Standard = Template.bind({});