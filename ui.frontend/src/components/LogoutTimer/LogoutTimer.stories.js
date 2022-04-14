import React from 'react';
import {LogoutTimer} from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/LogoutTimer',
  component: LogoutTimer,
  argTypes: {
    seconds:{
      control:{
        type: 'number',
      },
      defaultValue: 180,
    },
    fontSize:{
      control:{
        type:'number'
      },
      defaultValue: 12, 
    },
    text:{
      control:{
        type: 'text',
      },
      defaultValue:'Continuar Navegando',
    },
  },
  parameters:{
    docs:{
      page: Documentation,

    }
  }
};

const Template = (args) => <LogoutTimer {...args}/>;

export const Standard = Template.bind({});