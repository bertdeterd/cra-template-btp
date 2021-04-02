import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './i18n'
import { Loader } from '@ui5/webcomponents-react';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

