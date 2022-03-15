import './App.css';
import SongList from './components/SongList';
import { connect } from 'react-redux';

const App = (props) => {
    const selectedSong = props.selectedSong
    return <div>
        <p>Selected: {selectedSong?.title || '-'} </p>
        <SongList></SongList>
    </div>
}

function mapStateToProps(state) {
    return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(App);