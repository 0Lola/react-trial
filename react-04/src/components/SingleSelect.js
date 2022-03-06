import React from "react";
import './Component.css';

class SingleSelect extends React.Component {

    optionsData = [
        { value: '', display: 'Select...' },
        { value: 'affenpinscher', display: 'Affenpinscher' },
        { value: 'akita', display: 'Akita' },
        { value: 'bluetick', display: 'Bluetick' },
        { value: 'borzoi', display: 'Borzoi' },
        { value: 'dingo', display: 'Dingo' },
        { value: 'dhole', display: 'Dhole' }
    ]

    constructor(props) {
        super(props);
        this.state = { searchInput: '' }
        this.onSelected = this.onSelected.bind(this);
    }

    render() {

        const options = this.optionsData.map(e=> <option key={e.value} value={e.value}>{e.display}</option>);

        return <form className="ui form">
            <div className="field">
                <label>Search</label>
                <select id="searchInput" className="ui search dropdown"
                    placeholder="Search..."
                    value={this.state.searchInput}
                    onChange={this.onSelected}
                >
                    {options}
                </select>
            </div>
        </form>
    }

    onSelected(event) {
        this.setState({ searchInput: event.target.value })
        this.props.onSelectedEvent(event.target.value);
    }
}

export default SingleSelect;
