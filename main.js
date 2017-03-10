import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

ReactDom.render(
  <App />, 
  document.getElementById('app')
);

window.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
    e.preventDefault();
  }
});

console.error = (function(old) {
  return function error() {
    errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
    errors.style.display = '';
    old.apply(this, arguments);
  }
})(console.error);

if (window && window.Worker) {
}



