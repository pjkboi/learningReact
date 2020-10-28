import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function App () {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log("1st " + val);
  }, [val]);

  useEffect(() => {
    console.log("2nd " + val2);
  }, [val2]);

  return(
    <>
      <label>
        Favourite Movie:
        <input value={val} onChange={e => setVal(e.target.value)} />
      </label>
      <br />
      <label>
        Second Favourite Movie:
        <input value={val2} onChange={e => setVal2(e.target.value)} />
      </label>

    </>
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
