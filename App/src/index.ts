// import './public-path';
import { registerMicroApps, start } from 'qiankun';
import { renderApp } from './micro-app';

export const subAppContainerId = 'micro';
export const subAppContainer = `#${subAppContainerId}`;

registerMicroApps([
  {
    name: 'micro', // app name registered
    entry: '//localhost:3001',
    container: subAppContainer,
    activeRule: '/micro',
  }
]);

start();

renderApp()
