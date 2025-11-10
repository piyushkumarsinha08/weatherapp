import sun from "../src/assets/sun.svg"
import rain from '../src/assets/rain.svg'
import cloudy from '../src/assets/cloudy.svg'


import humidityImg from '../src/assets/humidity.svg'
import windImg from '../src/assets/wind.svg'
import perciImg from '../src/assets/precipitation.svg'
import { useState } from "react"

function Card({}){

//if(!weather) return null;


//const [] = useState()
let date = new Date();
let hrs = date.getHours();
let min = date.getMinutes();

let formatTime=()=>{
    if(hrs>12 && hrs<11){
        return "PM"
    }else{
        return "AM"
    }
}

    //const cityName = weather.name || "Unknown";
    //const description = weather.weather[0].main || "Unknown";
    //const tempCelsius = (weather.main.temp - 273.15).toFixed(1) || "Unknown"; 
    //const humidity = weather.main.humidity  || "Unknown";
    //const windSpeed = weather.wind.speed; 
    const tempCelsius=18;
    const description ="Clear";
    const humidity="70%";
    const windSpeed ="10km/hr";


return(
    <section id="weatherCard" className="h-[545px] w-[1026px] p-6 rounded-[30px] mt-10">
        <div className="currentTime overflow-hidden">
            <h2 className="mt-2 ml-5 font-[Lato] font-bold text-[1.5em] text-gray-950">Current Weather</h2>
            <h3 className="ml-5 text-gray-950 font-[Lato] font-medium text-xl">{hrs+":"+min}{formatTime}</h3>
        </div>

        <div className="weatherInfo font-[Montserrat] mt-15 ml-10 text-gray-950 flex">
            <img src={sun}
            className="h-32 w-32 mt-3"/>
            <h1 className="font-extrabold ml-3 mt-6 text-8xl">{tempCelsius}</h1>
        
        <div className="flex flex-col">
            <h2 className="font-extrabold mt-6 ml-3 text-6xl">{description}</h2>
            <h2 className="text-3xl ml-3 font-semibold">Feels like 18°</h2>
        </div>
        </div>
   
    <div className="extraInfo ml-5 mt-30 flex justify-evenly">
        <div classname="humidityBox">
            <img src={humidityImg}/>
            <span className="font-medium text-2xl text-[#111111]">{humidity}</span>
        </div>

        <div classname="humidityBox">
            <img src={windImg}/>
            <span className="font-medium text-2xl text-[#111111]">{windSpeed}</span>
        </div>
        
        <div classname="humidityBox">
            <img src={perciImg}/>
            <span className="font-medium text-2xl text-[#111111]">70%</span>
        </div>
    </div>
        
    </section>
)
}


export default Card;