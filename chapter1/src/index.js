import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function GitHub ({login}){
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.github.com/users/'+ login)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, []);
  if(data){
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} />
      </div>);
  }
  return null;
}
function App () {
  return (
    <GitHub login="pjkboi"/>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
