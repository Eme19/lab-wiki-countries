import './App.css';
import countries from './countries'
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CountriesList from './components/CountriesList'
import Countrydetails from './components/CountryDetails'
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
const [get, setGet]= useState([]);


useEffect(()=> {
  axios.get('https://ih-countries-api.herokuapp.com/countries')
  .then(response => {
    setGet(response.data)
  })
  .catch(error => {
    console.log(error)
  })
}, [])

  return (
    <div className="App">

      <Navbar/>

      <div className="container">
          <div className="row">
    
        <CountriesList countries={countries}/>
      <Routes>
        <Route path="/countrie/:countryId" element={<Countrydetails/>}/>
      </Routes>
    


     <h1>Api Countries</h1>
     {get.map(getreq => (
       <h2>{getreq.name.common}</h2>
      ))}
    </div>
    </div>
    </div>
  );
}

export default App;
