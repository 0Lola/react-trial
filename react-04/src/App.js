import './App.css';
import React from 'react';
import SingleSelect from './components/SingleSelect';
import Result from './components/Result';
// npm install --save axios
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { image: '' }
        this.onSelectedEvent = this.onSelectedEvent.bind(this);
    }

    render() {
        return <div className="ui">
            <SingleSelect onSelectedEvent={(value) => this.onSelectedEvent(value)}>
            </SingleSelect>
            <Result state={this.state}></Result>
        </div>
    }

    componentDidMount() {
    }

    async onSelectedEvent(value) {
        this.setState({ wait: true })

        const res = await axios.get(
            `https://dog.ceo/api/breed/${value}/images/random`);


        this.setState({ image: res.data.message, wait: false })
    }
}


export default App;
