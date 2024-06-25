import React from 'react';
import ReactDOM from 'react-dom/client';

//React Element

// const heading = React.createElement('h2', { id: 'heading' }, 'React Js 🚀'); //This is very Clumsy

// console.log(heading);

// so they Created jsx
// JSX - HTML-Like or XML-Like syntax
// JSX (transpiled before it reaches the JS) - PARCEL - Bebel
const Title = <h1 id='heading'>React Js 🚀 using JSX</h1>; //it is a react element
const Title1 = () => <h1 id='heading'>React Js 🚀 using JSX</h1>;

//React Functional Component
//Comonent Composition
const HeadingComponent = () => (
  <div id='container'>
    <h2>{Title}</h2>
    {Title1()}
    <h1 className='heading'>React Js Functional Components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
