import React, {Fragment} from 'react';
import ServiceAdd from './Components/ServiceAdd';
import ServiceList from './Components/ServiceList';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

function App() {

  const data = useState([]);


  return (
    <Fragment>
      <ServiceAdd />
      <ServiceList />
    </Fragment>
  );
}

export default App;
