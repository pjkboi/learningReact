import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Hello (props) {
  console.log(props)
  return <h1>Gintokis {props.number} {props.propValue}</h1>
}

ReactDOM.render(
  <Hello propValue="props" number={0}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
