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
                        {/* <div className="img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                                className="bi bi-brightness-high" viewBox="0 0 16 16">
                                <path
                                    d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg>
                        </div> */}
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