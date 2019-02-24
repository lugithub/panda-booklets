import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function generateQuestions(count, maxOperand) {
  const questions = [];

  while (questions.length < count) {
    const task = {
      first: getOperand(),
      second: getOperand(),
      op: getOp()
    };

    if (validate(task)) {
      questions.push(task);
    }
  }

  function getOp() {
    return Math.random() > 0.5 ? '+' : '-';
  }
  function getOperand() {
    return Math.floor(Math.random() * 20);
  }
  function validate(task) {
    if (task.op === '+') {
      return task.first + task.second <= 20;
    } else {
      return 0 <= task.first - task.second && task.first - task.second <= 20;
    }
  }
  return questions;
}

const tasks = generateQuestions(60, 20);

// var currentDate = new Date();
// var date = currentDate.getDate();
// var month = currentDate.getMonth();
// var year = currentDate.getFullYear();

// var monthDateYear = month + 1 + '/' + date + '/' + year;

ReactDOM.render(<App tasks={tasks} on={''} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
