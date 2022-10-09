import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from '@/App';
import './assets/css/index.less';
import 'normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading">
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
);
