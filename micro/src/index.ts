import  './public-path'
import { renderApp, mount, unmount, bootstrap } from './micro-app';

import './index.css';

export{mount,unmount,bootstrap}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log('ddd')
  renderApp({});
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
