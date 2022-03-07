import React from "react";
import './Component.css';
import Loader from './Loader';

function ResultList(props) {

    let resultList = <div></div>;

    if (props.state.images) {
        resultList = props.state.images.map((e, index) =>
            <img
                key={`images-${index}`}
                style={{ margin: 'auto' }}
                className="ui image large"
                src={e} />);
    } else if (props.state.wait) {
        resultList = <Loader></Loader>;
    }

    return resultList

}

export default ResultList;
