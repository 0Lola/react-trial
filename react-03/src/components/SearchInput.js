import React from "react";
import './Component.css';

class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchInput: '' }
        // use bind to make onSubmitNotWork work 
        this.onSubmitNotWork = this.onSubmitNotWork.bind(this);
    }

    render() {
        return <form className="ui form" onSubmit={this.onSubmit}>
            <div className="field">
                <label>Search</label>
                <input className="prompt"
                    type="text"
                    placeholder="Search..."
                    value={this.state.searchInput}
                    onClick={(event) => console.log(event)}
                    onChange={(event) => this.setState({ searchInput: event.target.value })}
                />
            </div>
            <button type="submit" className="ui primary button">
                Submit
            </button>
        </form>
    }


    onSubmit = (event) => {
        // 因為 form submit 預設會跳頁， preventDefault() 就是防止跳頁發生，可以註解跑一次就了解了。
        event.preventDefault();
        // emit to parent
        this.props.onSubmitEvent(this.state.searchInput);
    }

    // it is not work 
    onSubmitNotWork(event) {
        event.preventDefault();
        // 'this' means 'onSubmitNotWork', not class SearchInput
        // so this.state will return 'undefined'
        console.log(this.state.searchInput)

    }
}

export default SearchInput;
