import {FETCH_WEATHER} from '../actions/index';

export default function(state= [], action) {
    console.log('Action received '+ action);
    //here response is printed above. redux-promise is middleware, ability to stop or manipulate actions before they happen
    //it looks at payload property.
    //if payload is a promise
    //it stops the action entirely
    //once req finishes
    //it dispatches new action of same type but with a payload of a resoled req.
    //it unwraps the promise for us, waits until the promise resolves and then sends it to the reducer. i.e. here
    //so in our reducers we only have to work with data, not promises


    switch(action.type){
        case FETCH_WEATHER: {
            //return [action.payload.data]; //payload.data has the weather data, referred to from api response and console
            //we need to add on to existing state based on app mockup

            //don't do things like state.push(action.payload.data
            //just as in react , this is completely true for redux as well
            //as that would be mutating the state
            //we should just return new instance of state

            //return state.concat([action.payload.data]);
            //we aren't mutating the state here, but appending new data to existing one.
            //now we can use es6 syntax as follows

            return [action.payload.data, ...state];
        }
    }

    return state;
}