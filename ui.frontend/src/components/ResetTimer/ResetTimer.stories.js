import React from 'react';
import ResetTimer from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/ResetTimer',
  component: ResetTimer,
  argTypes: {
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

const Template = (args) => <ResetTimer {...args}/>;

export const Standard = Template.bind({});