import './App.css';
import countries from './countries'
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CountriesList from './components/CountriesList'
import Countrydetails from './components/CountryDetails'
import ApiCountryList from './components/ApiCountryList';
import { useState } from 'react';
import ApiCountryDetails from './components/ApiCountryDetails'

function App() {
const [show, setShow] = useState(true)
const [showApi, setShowApi] = useState(true)




function projectButtonHandler(){
 setShow((beforeShown)=> !beforeShown)
}


function aPiProjectHandler(){
  setShowApi((previApi) => !previApi)
}


  return (
    <>
    <Navbar/>
      <button className="countrisjson-btn" onClick={projectButtonHandler}>
      {show ? "Click Countries.json : )" : "  Hide project"}
    </button>

{!show && (
    <div className="App">
  
      <div className="container">
          <div className="row">
    
        <CountriesList countries={countries}/>
      <Routes>
        <Route path="/countrie/:countryId" element={<Countrydetails/>}/>
      </Routes>
  
    </div>
    </div>
    </div>)}


<button className="countrisjson-btn" onClick={aPiProjectHandler}>
      {showApi ? "Click Api CountryList : )" : "Hide Apiproject"}
    </button>

    {!showApi && 
    <>
      <div className="container">
          <div className="row"></div>
    <ApiCountryList/>
   
    </div>
   </>}

    </>
  );
}

export default App;
