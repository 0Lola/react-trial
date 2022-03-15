import React from 'react';

function SongDetail(props) {

    return <div className="item" style={{ margin: '15px' }}>
        <div className="right floated content">
            <button className="ui blue button"
                onClick={() => props.onSelected(props.song)}
            >Select</button>
        </div>
        <a className="header">Title : {props.song.title}</a>
        <p className="description">Duration: {props.song.duration}</p>
    </div>
};

export default SongDetail;
