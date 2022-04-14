import React from 'react';
import {CustomText} from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/CustomText',
  component: CustomText,
  argTypes: {
    text:{
      control:{
        type: 'text',
      },
      defaultValue: 'Texto padrão de exemplo',
    },
    fontSize:{
      control:{
        type:'number'
      },
      defaultValue: 48, 
    },
    color:{
      control:{
        type: 'color'
      },
      defaultValue: 'black',
    },
    margin:{
      control:{
        type: 'number'
      },
      defaultValue: 0,
    },
    family:{
      control:{
        type: 'text',
      },
      defaultValue:'Mark-Pro',
    },
    weight:{
      control:{
        type:'number',
      },
      defaultValue: 700,
    },
  },
  parameters:{
    docs:{
      page: Documentation,

    }
  }
};

const Template = (args) => <CustomText {...args}/>;

export const Standard = Template.bind({});