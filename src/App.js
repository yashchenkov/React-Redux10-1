import React, {Fragment} from 'react';
import ServiceAdd from './Components/ServiceAdd';
import ServiceList from './Components/ServiceList';
import ServiceFilter from './Components/ServiceFilter';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

function App() {

  const [data, setData] = useState('');
  console.log(data)

  return (
    <Fragment>
      <ServiceAdd />
      <ServiceFilter data={(data) => setData(data)}/>>
      <ServiceList filter={data}/>
    </Fragment>
  );
}

export default App;
