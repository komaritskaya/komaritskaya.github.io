import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Всем привет! </p>
          <p>Меня зовут Надежда, я фронтенд-разработчик с опытом 7 лет</p>
          <p>Работала с:</p>
          <ul>
            <li>HTML, CSS, JS</li>
            <li>Typescript, Flow</li>
            <li>SASS, LESS</li>
            <li>AngularJS 1.x</li>
            <li>Angular 2+</li>
            <li>React</li>
            <li>React Native</li>
            <li>Redux, Redux-Saga, Redux-Thunk, Redux Toolkit</li>
            <li>Jest + Enzyme, Jasmine + Karma</li>
            <li>Node.js (чучуть)</li>
          </ul>
          <p>Цель на курс - заполнить пробелы и приятно провести время</p>
          <a href="https://t.me/komaritskaya">Мой ТГ</a>
        </div>
      </header>
    </div>
  );
}

export default App;
