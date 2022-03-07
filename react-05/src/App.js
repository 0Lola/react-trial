import './App.css';
import React from 'react';
import SingleSelect from './components/SingleSelect';
import ResultList from './components/ResultList';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { images: '' }
        this.onSelectedEvent = this.onSelectedEvent.bind(this);
    }

    render() {
        return <div className="ui">
            <SingleSelect onSelectedEvent={(value) => this.onSelectedEvent(value)}>
            </SingleSelect>
            <ResultList state={this.state}></ResultList>
        </div>
    }

    componentDidMount() {
    }

    async onSelectedEvent(value) {
        this.setState({ wait: true })

        const res = await axios.get(
            `https://dog.ceo/api/breed/${value}/images`);

        this.setState({ images: res.data.message, wait: false })
    }
}


export default App;
