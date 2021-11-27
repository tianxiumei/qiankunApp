import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export function renderApp() {
    ReactDOM.render(<App />, document.querySelector('#root'));
}
