import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Lake ({name}){
  return <h1>{name}</h1>
}

function App () {
  return (<div>
    <Lake name="Lake Eeriee" />
    <Lake name="Lake Erie" />
  </div>)
}

ReactDOM.render(
  <App propValue="props" number={0}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
