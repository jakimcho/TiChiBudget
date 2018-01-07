console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { HashRouter as Router, Route } from 'react-router-dom';

 
document.addEventListener('DOMContentLoaded', function() {
/*  ReactDOM.render(
    React.createElement(Counter, {name: "Jakim"}),
    document.getElementById('mount')
  );*/

  const mountingPoint = document.getElementById('mount');
  const app = new App();

  ReactDOM.render(
    <App />,
    mountingPoint
  );

});