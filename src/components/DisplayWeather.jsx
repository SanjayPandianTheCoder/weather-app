import React from 'react'

function DisplayWeather(props) {
  return (
    <>    
    
    <div className="weather-card">
        <table className='table table-hover'>
            <tr>
                <td>Location</td>
                <td>:</td>
                <td>{props.weather.name}</td>
            </tr>
            <tr>
                <td>Mood</td>
                <td>:</td>
                <td>{props.weather.weather[0].main}</td>
            </tr>
            <tr>
                <td>Temperature</td>
                <td>:</td>
                <td>{props.weather.main.temp}</td>
            </tr>
            <tr>
                <td>Humidity</td>
                <td>:</td>
                <td>{props.weather.main.humidity}</td>
            </tr>
            <tr>
                <td>Pressure</td>
                <td>:</td>
                <td>{props.weather.main.pressure}</td>
            </tr>
        </table>
        {/* <div className="header">
            <h3>Location : {props.weather.name}</h3>            
        </div>
        <div className="row1">
            <div className="weather-main">
                <h3>Mood : {props.weather.weather[0].main}</h3>
            </div>
            <div className="weather-temp">
                <h3>Temperature : {props.weather.main.temp}</h3>
            </div>
        </div>
        <div className="row2">
            <div className="humidity">
                <h3>Humidity : {props.weather.main.humidity}</h3>
            </div>
            <div className="pressure">
                <h3>Pressure : {props.weather.main.pressure}</h3>
            </div>
        </div> */}
    </div>
    </> 
     );
}

export default DisplayWeather