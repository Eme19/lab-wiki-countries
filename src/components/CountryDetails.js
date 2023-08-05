import { useParams , Link } from 'react-router-dom'
import countries from '../countries.json'
import { useState, useEffect } from "react"



function Countrydetails(props){
    const [countrie, setCountriess ] = useState(countries)
    const [isLoading, setIsLoading]= useState(true)

   const {countryId} = useParams();


   console.log("====>", countryId) 

useEffect(()=> {
const oneCountry = countries.filter((country)=> country.alpha3Code === countryId )
console.log("===show=>", oneCountry) 
setCountriess(oneCountry)
setIsLoading(false)
console.log("let me see you please  haha ", oneCountry) 

},[countryId])

if(countrie === null && isLoading === false) {
    return <p>Loading..</p>
  }


    return (
<>
        {!isLoading && 
            
        <div className="col-7">
            <div className="col-7">
            <><h1>{countrie.name}</h1>
                   <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td width={30}>Capital</td>
                                <td>{countrie[0].capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                {countrie[0].area}
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Border</td>
                                <td>
                                
                                    <ul>

                                  {countrie[0].borders.map((border)=> {
                                    console.log(border)
                                    const countryBorders = countries.find((newcountry)=> newcountry.alpha3Code === border )
                                    return <li><Link to={`/${border}`}>{countryBorders.name.common}</Link></li>
                                  })}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                </table></>
          </div>
        
    
       
        </div>}
        </>
    )
}

export default Countrydetails