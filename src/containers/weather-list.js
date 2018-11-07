import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;

        const temps = cityData.list.map( weather => weather.main.temp); //if you want to convert temp to different scale, can do that right here
        const pressures = cityData.list.map( weather => weather.main.pressure);
        const humidities = cityData.list.map( weather => weather.main.humidity);
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;

        const {lon, lat} = cityData.city.coord; //es6 syntax destructuring
        console.log(temps);

        //By default google maps does not assume any size for the map so we added style to define width and height in style.css

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="blue" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        )
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure  (hPa)</th>
                        <th>Humidity  (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
//this.props.weather is the response array
//when you do a map on it, each row will correspond to a city



//Takes the entire application state and Whatever is returned from here will show up as props
 //inside weather list
// function mapStateToProps (state) {
//     return {
//         weather: state.weather //state.weather because in reducer we have weather as the name
//     };
// }

function mapStateToProps({weather}) {
    return {weather}; //{weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);