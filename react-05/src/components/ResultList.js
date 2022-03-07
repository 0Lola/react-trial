import './Component.css';
import React from "react";

import Loader from './Loader';
import Image from './Image';

const ResultList = (props) => {

    let resultList = <div></div>;

    if (props.state.images) {
        resultList = props.state.images.map((e, index) =>
            <Image
                key={`images-${index}`}
                image={e}
            ></Image>);
    } else if (props.state.wait) {
        resultList = <Loader></Loader>;
    }

    return <div className="image-list">{resultList}</div>
}

export default ResultList;
