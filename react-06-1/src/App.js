import './App.css';
import React from 'react';
import SearchInput from './components/SearchInput';
import Accordion from './components/Accordion';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { results : [] }
    }

    render() {
        return <div className="ui">
            <SearchInput results={(value)=> this.setState({results:value})}></SearchInput>
            <Accordion results={this.state.results}></Accordion>
        </div>
    }
}


export default App;
