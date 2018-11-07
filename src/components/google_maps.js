import React, {Component} from 'react';

class GoogleMap extends Component {

    //one of our lifecycle methods that automatically gets
    //called once the component is rendered on screen
    //here this.refs.map tells where on screen to render this component
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
        //zoom level sets the specified zoom level for the map
        //center property tells where to center the map on
        //in weather maps api, latitude is lat and longitude in lon
        //for google api, latitude is lat and longitude is lng
    }
    //ref in react is a reference to a component rendered on screen, in this case the third party map component by
    //referring to this.refs.map
    render () {
        return <div ref="map"/>;
    }
}

export default GoogleMap;
//index.html imports google maps api