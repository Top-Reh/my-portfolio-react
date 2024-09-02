import React, { useEffect, useState } from "react";
//import Component from './weather-component.js';
//import ChangeLocation from './weather-change-location.js';
import Test from './weather-intro.js';
import './weatherstyle.css';

export default function Weather() {
    const [city, setCity] = useState('New York');
    const [condition, setCondition] = useState('');
    const [temperature, setTemperature] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    const [days, setDays] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [precip,setprecip] = useState('');
    const [icon,setIcon] = useState('');
    const [fore1degree,setFore1degree] = useState('');
    const [fore2degree,setFore2degree] = useState('');
    const [fore3degree,setFore3degree] = useState('');
    const [fore4degree,setFore4degree] = useState('');
    const [fore1icon,setFore1icon] = useState('');
    const [fore2icon,setFore2icon] = useState('');
    const [fore3icon,setFore3icon] = useState('');
    const [fore4icon,setFore4icon] = useState('');
    const [day1name,setDay1Name] = useState('');
    const [day2name,setDay2Name] = useState('');
    const [day3name,setDay3Name] = useState('');
    const [day4name,setDay4Name] = useState('');

    const handleInputChange = (event) => {
        const newValue = event;
        setCity(newValue) // Update local state
    };

    //const handleInputSubmit = (inputValue) => {
        // Here you can fetch weather data based on the new city input value
        //setCity(inputValue); // Update city state with input value
    //};

    useEffect(() => {
        const fetchWeatherData = async () => {
                /*const apiKey = 'cde42b8acd2d0aa36e47c42099726f1a';
                const geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                const response = await fetch(geoApiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setLat(data.coord.lat);
                setLon(data.coord.lon);
                setName(data.name);*/

                //const weatherApiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;
                //const apiKey = 'cde42b8acd2d0aa36e47c42099726f1a';
                //const weatherApiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                //const weatherApiUrl = 'https://api.weatherapi.com/v1/current.json?key=7ad1ad71c6a343aeb9541817241807&q=${city}&aqi=no'
                try {
                const apikey = '7ad1ad71c6a343aeb9541817241807';
                const weatherApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=5&aqi=no&alerts=no`;
                //const test = `https://api.weatherapi.com/v1/current.json?key=7ad1ad71c6a343aeb9541817241807&q=London&aqi=no`
                const weatherResponse = await fetch(weatherApiUrl);
                if (!weatherResponse.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const weatherData = await weatherResponse.json();
                console.log(weatherData);
                console.log(weatherData.current.temp_c);
                console.log(weatherData.current);
                console.log(typeof(weatherData.current));
                console.log(weatherData.current.temp_c);
                console.log(weatherData.current.temp_c.toString());
                console.log(weatherData.forecast);
                console.log(weatherData.forecast.forecastday[0]);
                console.log(weatherData.forecast.forecastday[0].day.condition.icon.toString());
                console.log(weatherData.forecast.forecastday[1].day.condition.icon.toString());
                console.log(weatherData.forecast.forecastday[2].day.condition.icon.toString());
                console.log(weatherData.forecast.forecastday[3].day.condition.icon.toString());

                //setCondition(weatherData.current.weather[0].main);
                setTemperature(weatherData.current.temp_c.toString());
                setHumidity(weatherData.current.humidity.toString());
                setWind(weatherData.current.wind_kph.toString());
                setprecip(weatherData.current.precip_in.toString());
                setCondition(weatherData.current.condition.text.toString());
                setIcon(weatherData.current.condition.icon.toString());
                setFore1degree(weatherData.forecast.forecastday[1].day.maxtemp_c.toString());
                setFore2degree(weatherData.forecast.forecastday[2].day.maxtemp_c.toString());
                setFore3degree(weatherData.forecast.forecastday[3].day.maxtemp_c.toString());
                setFore4degree(weatherData.forecast.forecastday[4].day.maxtemp_c.toString());
                setFore1icon(weatherData.forecast.forecastday[1].day.condition.icon.toString());
                setFore2icon(weatherData.forecast.forecastday[2].day.condition.icon.toString());
                setFore3icon(weatherData.forecast.forecastday[3].day.condition.icon.toString());
                setFore4icon(weatherData.forecast.forecastday[4].day.condition.icon.toString());
                setDay1Name(getDayName(weatherData.forecast.forecastday[1].date.toString()));
                setDay2Name(getDayName(weatherData.forecast.forecastday[2].date.toString()));
                setDay3Name(getDayName(weatherData.forecast.forecastday[3].date.toString()));
                setDay4Name(getDayName(weatherData.forecast.forecastday[4].date.toString()));
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchWeatherData();
    }, [city]);

    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long' };
        const dayName = date.toLocaleDateString('en-US', options);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based, so add 1
        const year = date.getFullYear();

        setDays(dayName);
        setFormattedDate(`${day}.${month}.${year}`);
    }, []);

    const getDayName = (parem) => {
        const date = new Date(parem);
        return date.toLocaleDateString('en-US',{weekday:'long'})
    }

    console.log(city)

    return (
        <div>
            <Test 
                city={city}
                temperature={temperature}
                formattedDate={formattedDate}
                days={days}
                humidity={humidity}
                wind={wind}
                precip={precip}
                condition={condition}
                icon={icon}
                fore1icon={fore1icon}
                fore2icon={fore2icon}
                fore3icon={fore3icon}
                fore4icon={fore4icon}
                day1name={day1name}
                day2name={day2name}
                day3name={day3name}
                day4name={day4name}
                fore1degree={fore1degree}
                fore2degree={fore2degree}
                fore3degree={fore3degree}
                fore4degree={fore4degree}
                onChange={handleInputChange}/>
        </div>
);
}
                //onSubmit={handleInputSubmit}
