import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

declare global {
  interface Window {
    pwd?: () => string
    run?: (command: string) => string
  }
}

window.pwd = window.pwd || (() => {
  console.log('Run pwd')
  return 'Run pwd'
})

window.run = window.run || ((command: string) => {
  const result = `Run command: ${command}`
  console.log(result)
  return result
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
