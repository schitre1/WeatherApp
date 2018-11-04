import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;

        const temps = cityData.list.map( weather => weather.main.temp);
        const pressures = cityData.list.map( weather => weather.main.pressure);
        const humidities = cityData.list.map( weather => weather.main.humidity);
        console.log(temps);


        return (
            <tr key={name}>
                <td>{name}</td>
                <Sparklines height={120} width={180} data={temps}>
                    <SparklinesLine color = "red"/>
                </Sparklines>
            </tr>
        )
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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