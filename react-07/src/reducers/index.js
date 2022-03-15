import { combineReducers } from 'redux';

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})


// Song List reducer
function songsReducer() {
    return [
        {
            title: 'F',
            duration: '4:05'
        },
        {
            title: 'F1',
            duration: '2:05'
        },
        {
            title: 'F3',
            duration: '3:05'
        }
    ]
}

// Selected Song reducer
function selectedSongReducer(selectedSong = null, action) {
    if (action.type === 'SONG_SELECTED') {
        console.log(action.payload)
        return action.payload;
    }
    return selectedSong;
}