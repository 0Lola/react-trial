import './App.css';
import React from 'react';
import SearchInput from './components/SearchInput';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="ui">
            <SearchInput onSubmitEvent={(value) => this.onSubmitEvent(value)}></SearchInput>
        </div>
    }

    componentDidMount() {
    }

    onSubmitEvent(value) {
        console.log(value)
    }
}


export default App;
