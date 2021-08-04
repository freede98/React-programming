import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';          //default app to display
import MyGame from './MyGame';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <MyGame />,
  document.getElementById('root')
);
