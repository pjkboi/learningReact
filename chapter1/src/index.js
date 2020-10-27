import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const animelist = [
  {id: 0, name: "one piece", character: "Luffy"},
  {id: 1, name: "one punch man", character: "Saitama"},
  {id: 2, name: "naruto", character: "naruto"}
];

function OnGoing ({anime}){
  return (
    <div>
      <h2>{anime}</h2>
    </div>
  )
}

function Finished ({anime}){
  return (
    <div>
      <h2>{anime}</h2>
    </div>
  )
}

function App (props) {
  if(props.anime === "finished"){
    return <Finished anime="naruto"/>
  }
  else if(props.anime === "ongoing"){
    return <OnGoing anime="one piece"/>
  }
  return (
    <h1>ERROR</h1>
  )
}

ReactDOM.render(
  <App anime="ongoing"/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
