import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        //else this is undefined in onInputChange

        //if you have a callback that references this, check that you may have to bind this
    }

    onInputChange(event) { //all dom handlers come with event object dom feature
        this.setState({term: event.target.value});
    }

    //Goal is to call the action creator whenever the user submits the form
    //from here we need to reach out to redux and work with it directly
    //so we need to connect the search bar container to redux using the connect method
    onFormSubmit(event) {
        event.preventDefault();
        //we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        //clear the input after
        this.setState({term: ''});
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

//makes sure that action creator fetchWeather is bound to dispatch and that the action flows from the action
//creator through to the middleware and the reducers
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}


//firsy argument that is null is for the state,
//so we are saying this component does not care about state,
//mapDispatchToProps is expected as second arg so we set first to null
export default connect(null, mapDispatchToProps)(SearchBar);