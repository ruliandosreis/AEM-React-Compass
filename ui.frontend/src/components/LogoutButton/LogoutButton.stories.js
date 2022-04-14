import React from 'react';
import LogoutButton from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/LogoutButton',
  component: LogoutButton,
  argTypes: {
    text:{
      control:{
        type: 'text',
      },
      defaultValue: 'Logout',
    },
    fontSize:{
      control:{
        type:'number'
      },
      defaultValue: 18, 
    }
  },
  parameters:{
    docs:{
      page: Documentation,

    }
  }
};

const Template = (args) => <LogoutButton {...args}/>;

export const Standard = Template.bind({});