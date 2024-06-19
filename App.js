import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'chid' }, [
    React.createElement('h1', {}, "I'm an h1 tag"),
    React.createElement('h2', {}, "I'm an h2 tag"),
  ]),
  React.createElement('div', { id: 'chid2' }, [
    React.createElement('h1', {}, "I'm an h1 tag"),
    React.createElement('h2', {}, "I'm an h2 tag"),
  ])
);

const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  'Hello World From React!'
);

console.log(parent); //return Object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
