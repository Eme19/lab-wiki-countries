import {useState , useEffect} from 'react';
import { Link} from 'react-router-dom';

function CountriesList (props){
const [countries, setCountries]= useState([])

useEffect(()=> {
    setCountries(props.countries);
},[props.countries])

    return (
        
          <div className="col-5 style-country" >
          {countries.map((country)=> (
            <div className="list-group" key={country.alpha3Code}>
              <Link className="list-group-item list-group-item-action"  to={`/countrie/${country.alpha3Code}` } 
                ><img alt="" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} width={20} 
                />{country.name.common}
                 </Link>
            </div>
              ))}
          </div>
     
       
    )
} 
export default CountriesList;