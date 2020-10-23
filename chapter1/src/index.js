import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let anime = {
  name: "Gintama",
  character: "Gintoki"
}

ReactDOM.render(
  <h1>
    {anime.character} is my favourite character from {anime.name}.
  </h1>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
