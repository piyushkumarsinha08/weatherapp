import React,{useState} from 'react'
import Card from './card';

const FIXED_COUNTRIES=[
    {name:"India",code:"IN"},
    {name:"United State",code:"US"},
    {name:"United Kingdom",code:"GB"},
    {name:"Canada",code:"CA"},
    {name:"Australia",code:"AU"},
    {name:"Japan",code:"JP"},
];


function WeatherApp(){

    const [city,setCity] = useState("");
    const [countryCode,setCountryCode] = useState(FIXED_COUNTRIES[0].code)
    const [weatherData,setWeatherData] = useState(null);
    const [loading,setLoading] = useState(null);
    const [error,setError] = useState("No error");

    const API_KEY ="71921118164309b9e74803939ed9ab52";
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    const fetchWeather = async()=>{
        const apiurl = `${BASE_URL}?q=${city},${countryCode}&appid=${API_KEY}`

        //setLoading(true)
        //setError("No error")
        try{
        const response = await fetch(apiurl)
        const data = await response.json();
        setWeatherData(data);
        }catch(err){
        setError(err.message)
        }
    }

    return(
        <>
        <section className="h-[10vh] w-screen bg-[#222] flex place-content-around">
         <div className=" ml-4">
            <h2 className="font-[Lato] mt-4 text-3xl font-black">Balloon</h2>
        </div>

        <div>
            <select className="bg-amber-50 h-8 rounded-l-sm" 
                value={FIXED_COUNTRIES.code}
                onChange={(e)=>setCountryCode(e.target.value)}>
                {FIXED_COUNTRIES.map((country)=>(
                    <option key={country.code} value={country.code}>
                        {country.code}
                    </option>
                ))}
            </select>
                

            <input type="text" 
            id="searchCityBar"
            placeholder="Enter city name" 
            onChange={(e)=>{setCity(e.target.value)}}
            className="mt-6 h-8 w-2xs outline-0"/>
        
        <button id="searchBtn"
        className="bg-amber-400 h-8 w-auto rounded-r-sm" 
        onClick={fetchWeather} 
        disabled={loading || !city}>
            {loading ? "Fetching" : "Get Weather"}
        </button>
        </div>
        </section>
    <div className="m-auto">
        <Card weather={weatherData}/>
     </div>
        </>
    )
}

export default WeatherApp;
