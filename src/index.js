import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initialState } from './components/reducer';
import { StateProvider } from './components/StateProvider';
import reducer from "./components/reducer"
import { createContext, useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    <App />
    
  {/* </StateProvider> */}
  </React.StrictMode>
);




