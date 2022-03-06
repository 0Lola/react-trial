import React from "react";
import './Component.css';
import Loader from './Loader';

function Result(props) {
    return props.state.wait ?
        <Loader></Loader> :
        <div>
            <img
                className="ui image"
                style={{ margin: 'auto' }}
                src={props.state.image} />
        </div>

}

export default Result;
