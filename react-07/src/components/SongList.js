import React from 'react';
import { connect } from 'react-redux';
import SongDetail from './SongDetail';

// 加入 action - selectSong
import { selectSong } from '../actions';

class SongList extends React.Component {

    
    constructor(props) {
        super(props);
        this.onSelected = this.onSelected.bind(this);
    }


    render() {
        console.log(this.props)
        const songs = this.props.songs.map((e, i) =>
            <SongDetail key={i} song={e} onSelected={(value)=> this.onSelected(value)}></SongDetail>
        );
        return <div className="ui relaxed divided list">{songs}</div>;
    }

    onSelected(value){
        // dispatch action
        this.props.selectSong(value)
    }
}

function mapStateToProps(state) {
    return { songs: state.songs , selectedSong : state.selectedSong }
}

//  綁定 action
export default connect(mapStateToProps, { selectSong })(SongList);
