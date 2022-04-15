import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';

import DevsProvider from './context/Devs';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <DevsProvider>
        <div>
          {this.childComponents}
          {this.childPages}
        </div>
      </DevsProvider>
    );
  }
}

export default withModel(App);
