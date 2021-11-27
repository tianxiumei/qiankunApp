import ReactDOM from 'react-dom';
import App from './App';

export function renderApp(props: any) {
    const { container } = props;
    console.log('container:', container)
    ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
    console.log('[react16] props from main framework', props);
    renderApp(props);
}

export async function unmount(props: any) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}