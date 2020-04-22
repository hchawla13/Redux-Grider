import { combineReducers } from 'redux'
const songsReducer = () => {
    return [
        { title: 'Channa mereya', duration: "4:10" },
        { title: 'Smells like teen spirit', duration: "3:24" },
        { title: 'Comfortably numb', duration: "7:30" },
        { title: 'o mere dil k chain', duration: "2:59" }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})