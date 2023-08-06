import axios from 'axios';
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function ApicountryList (){
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
    <div className="col-5 style-country" >
        <div className="list-group">
     {get.map(getreq => (
      <div key={getreq.alpha3Code}>
        <Link className="list-group-item list-group-item-action"  to={`${getreq.alpha2Code}`} 
        ><img alt="" src={`https://flagpedia.net/data/flags/icon/72x54/${getreq.alpha2Code.toLowerCase()}.png`} width={20}/> {getreq.name.common} </Link>
      </div>
      ))}
    </div>
    </div>
)
}

export default ApicountryList;