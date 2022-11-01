import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';


// React 18 must use new container root render
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));