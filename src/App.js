import React from 'react';
import random from 'random';
import logo from './IMG_20190216_154755327.jpg';
import './App.css';

function Question({ task }) {
  return (
    <p className="task">
      {task.first} {task.op} {task.second} = <span className="response" />
    </p>
  );
}

function generateNumbers(count) {
  let numbers = [];
  while (numbers.length < count) {
    const x = random.uniformInt(1, 9)();
    if (numbers.find(j => j === x)) {
      continue;
    }
    numbers.push(x);
  }
  return numbers;
}

function RepeatNumbers() {
  const dummmy = [0, 0, 0, 0];
  return (
    <ul>
      {dummmy.map(() => (
        <li>{generateNumbers(4).join(', ')}</li>
      ))}
      {dummmy.map(() => (
        <li>{generateNumbers(5).join(', ')}</li>
      ))}
      {dummmy.map(() => (
        <li>{generateNumbers(6).join(', ')}</li>
      ))}
      {dummmy.map(() => (
        <li>{generateNumbers(7).join(', ')}</li>
      ))}
      {dummmy.map(() => (
        <li>{generateNumbers(8).join(', ')}</li>
      ))}
    </ul>
  );
}

function App({ tasks, on }) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Panda practice on {on}
      </header>
      <article className="wisc">
        <h5>
          I will say some numbers for only one time. When i stop, you repeat
          them to me in the same order just the way i said.
        </h5>
        <h5>Say the number backwards</h5>
        <h5>Say the numbers in order, starting from the smallest</h5>
        <RepeatNumbers />
        <RepeatNumbers />
        <RepeatNumbers />
      </article>
      <article className="booklet">
        {tasks.map((task, i) => (
          <Question task={task} key={i} />
        ))}
      </article>
    </div>
  );
}

export default App;
