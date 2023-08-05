import { useParams , Link } from 'react-router-dom'
import countries from '../countries.json'
import { useState, useEffect } from "react"



function Countrydetails(props){
    const [countrie, setCountriess ] = useState(null)
    const [isLoading, setIsLoading]= useState(false)

   const {countryId} = useParams();


   console.log("====>", countryId) 

useEffect(()=> {
const oneCountry = countries.find((country)=> country._id === countryId )
console.log("===show=>", oneCountry) 
setCountriess(oneCountry)
setIsLoading(true)
console.log("let me see you please  haha ", oneCountry) 

},[countryId])

if(countrie === null && isLoading === false) {
  return <p>Loading..</p>
}

    return (
        <div>
            <h1>Country Details</h1>
            <div className="col-7">
                {!isLoading && <h1>Country Details not Found!</h1>}
                {isLoading && 
            <><h1>{countrie.name.official}</h1><table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td width={30}>Capital</td>
                                <td>{countrie.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                {countrie.area}
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>{countrie.border}</td>
                                <td>
                                    <ul>
                                        <li><a href="/AND">Andorra</a></li>
                                        <li><a href="/BEL">Belgium</a></li>
                                        <li><a href="/DEU">Germany</a></li>
                                        <li><a href="/ITA">Italy</a></li>
                                        <li><a href="/LUX">Luxembourg</a></li>
                                        <li><a href="/MCO">Monaco</a></li>
                                        <li><a href="/ESP">Spain</a></li>
                                        <li><a href="/CHE">Switzerland</a></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                </table></>}
                <Link to="/">Back</Link>
          </div>
       
        </div>
    )
}

export default Countrydetails