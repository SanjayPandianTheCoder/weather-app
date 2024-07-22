import { useState, useEffect, useCallback } from 'react';
import DisplayWeather from './components/DisplayWeather';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './components/Searchbar';

function App() {
  const [weather, setWeather] = useState({
    "coord": {
      "lon": 78.1167,
      "lat": 9.9333
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 36.01,
      "feels_like": 40.64,
      "temp_min": 36.01,
      "temp_max": 36.01,
      "pressure": 1004,
      "humidity": 44,
      "sea_level": 1004,
      "grnd_level": 989
    },
    "visibility": 6000,
    "wind": {
      "speed": 7.72,
      "deg": 280,
      "gust": 12.86
    },
    "clouds": {
      "all": 40
    },
    "dt": 1721464464,
    "sys": {
      "type": 1,
      "id": 9216,
      "country": "IN",
      "sunrise": 1721435699,
      "sunset": 1721481146
    },
    "timezone": 19800,
    "id": 1264521,
    "name": "Madurai",
    "cod": 200
  });

  const [place, setPlace] = useState('');

  const getWeatherData = useCallback(async (place) => {
    if (place) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=a49059c860a04a73ce190d627b6af0ca&units=metric`;
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson && responseJson.cod === 200) {
        setWeather(responseJson);
      }
    }
  }, []);

  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      getWeatherData(place);
    }, 500); // debounce delay

    return () => clearTimeout(debounceFetch); // cleanup debounce
  }, [place, getWeatherData]);

  return (
    <>
      <div className="weather-app">
        <Searchbar place={place} setPlace={setPlace} />
        <DisplayWeather weather={weather} />
      </div>
    </>
  );
}

export default App;
