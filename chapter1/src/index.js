import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const animelist = [
  {id: 0, name: "one piece", character: "Luffy"},
  {id: 1, name: "one punch man", character: "Saitama"},
  {id: 2, name: "naruto", character: "naruto"}
];

function App ({anime}) {
  return (<div>
    {anime.map(anime => (
      <div>
        <h2>{anime.name}</h2>
        <p>MC = {anime.character}</p>
      </div>
    ))}
  </div>)
}

ReactDOM.render(
  <App anime={animelist}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
