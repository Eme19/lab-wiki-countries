import {useState , useEffect} from 'react';
import { Link} from 'react-router-dom';

function CountriesList (props){
const [countries, setCountries]= useState([])

useEffect(()=> {
    setCountries(props.countries);
},[props.countries])

    return (
        <div className="container">
        <div className="row">
          <div className="col-5 style-country" >
          {countries.map((country)=> (
            <div className="list-group" key={country.alpha3Code}>
              <Link  to={`/countrie/${country.alpha3Code}` } className="list-group-item list-group-item-action"
                >{} {country.name.official}</Link>
            </div>
              ))}
          </div>
          </div>


        </div>
        
    )
} 

export default CountriesList;