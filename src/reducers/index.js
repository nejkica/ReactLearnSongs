import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'No scrubs', duration: '4:05'},
		{ title: 'Lithium', duration: '2:30'},
		{ title: 'Nevermind', duration: '10:40'},
		{ title: 'Murke', duration: '3:15'}
	];
};

const selectedSongReducer = (selectSong = null, action) => {
	if(action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});