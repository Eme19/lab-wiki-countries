import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ApiCountrydeTails(){
const [countries, setCountries]= useState([]) ; 

const {alpha3Code}= useParams()


useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/${countries.alpha3Code}`)
     .then(response => response.json())
        .then(data => {
            setCountries({countries: data});
console.log(data)
        })
        .catch(error =>{
            console.log(error)
        })
       
}, [])

if(!countries){
    return <p>Loading....</p>

}
    
return (
    <>
            
                
            <div className="col-7">
                <div className="col-7">
                <><h1>{countries.name}</h1>
                       <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td width={30}>Capital</td>
                                    <td>{countries.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>
                                    {countries.area}
                                        <sup>2</sup>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Border</td>
                                    <td>
                                    
                                        <ul>
                                            <li>{countries.borders}</li>
    
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                    </table></>
              </div>
            
        
           
            </div>
            </>
        )
    }
    
    

export default ApiCountrydeTails;