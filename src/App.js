import React from 'react';
import logo from './IMG_20190216_154755327.jpg';
import './App.css';

function Question({ task }) {
  return (
    <p className="task">
      {task.first} {task.op} {task.second} = <span className="response" />
    </p>
  );
}

function App({ tasks, on }) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Panda practice on {on}
      </header>
      <article className="booklet">
        {tasks.map((task, i) => (
          <Question task={task} key={i} />
        ))}
      </article>
    </div>
  );
}

export default App;
