import React, { Component } from 'react';
import Loader from './Loader';

class App extends Component {

    constructor(props) {
        super(props);

        // default state
        this.state = { latitude: null, error: null };
    }

    render() {

        if (!this.state.error && !this.state.latitude)
            return <Loader></Loader>


        if (this.state.error)
            return <div>Error: {this.state.error}</div>

        if (this.state.latitude && !this.state.error)
            return <div>Latitude: {this.state.latitude}</div>
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // if user accept geolocation => setState: change state
            (position) => this.setState({
                latitude: position.coords.latitude,
                error: null
            }),
            // if user reject geolocation => call api get location via IP address
            (err) => this.setState({
                latitude: null,
                error: err.message

            })
        )
    }
}
export default App;