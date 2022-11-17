import React, {useState, useEffect} from 'react';
import '../App.css';

const Weather = () => {

    const [City, setCity] = useState(null); 
    const [Search, setSearch] = useState("Miami");             
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=e631090799cff1e8d2f9c76b92ed97f9`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [Search])

    return (
        <>
            <div className='bodyWeather'>
                <div className="mainWeather">
                    <div className="firstdiv">
                        <input type="text" placeholder="City" onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                    </div>
                {!City ? (
                    <p className='error'>No city found</p>
                ) : (
                    <div className="seconddiv">
                       
                        <h2>{Search}</h2>
                        <h3>{City.temp} °C</h3>
                        <p>Min  {City.temp_min} °C | Max {City.temp_max} °C</p>
                        <p>Pressure {City.pressure} hPa</p>
                        <p>Humidity {City.humidity} %</p>

                    </div>
                )
                }
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>
            </div>
        </>
    );
}

export default Weather;