import './App.css';
import React, { useState } from "react";
import Msg from './components/Msg'
import Form from './components/Form'
import Switch from './components/ThemeSwitch'

function App() {
  return (
    <div className="App">
      <div className='page-wrapper'>
        <Switch />
        <Msg />
        <Form />
      </div>
    </div>
  );
};

export default App;