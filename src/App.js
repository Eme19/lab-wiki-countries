import './App.css';
import countries from './countries'
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CountriesList from './components/CountriesList'
import Countrydetails from './components/CountryDetails'

function App() {


  return (
    <div className="App">
      <Navbar/>
      <CountriesList countries={countries}/>
      <Routes>
        <Route path="/countrie/:countryId" element={<Countrydetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
