import React from 'react';
import LoginFormComponent from './index';
import Documentation from './doc.mdx';

export default {
  title:'CustomComponents/LoginFormComponent',
  component: LoginFormComponent,
  parameters:{
    docs:{
      page: Documentation,
    }
  }
};

const Template = (args) => <LoginFormComponent {...args}/>;

export const Standard = Template.bind({});