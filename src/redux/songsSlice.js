import { createSlice } from '@reduxjs/toolkit';
import { formatTime } from '../helpers/formatTime';

const songsSlice = createSlice({
	name: 'songs',
	initialState: {
		songs: [],
		favouriteList: [],
	},
	reducers: {
		toggleFavourite: (state, action) => {
			const songExistsInFavourites = state.favouriteList.some(
				(song) => song.id === action.payload.id
			);

			if (songExistsInFavourites) {
				state.favouriteList = state.favouriteList.filter(
					(song) => song.id !== action.payload.id
				);

				state.songs.forEach((song) => {
					if (song.id === action.payload.id) {
						song.favourite = false;
					}
				});
			} else {
				state.favouriteList.push({
					...action.payload,
					favourite: true,
				});

				state.songs.forEach((song) => {
					if (song.id === action.payload.id) {
						song.favourite = true;
					}
				});
			}
		},
		editFavouriteTitle: (state, action) => {
			const { id, title } = action.payload;
			const songToEdit = state.favouriteList.find(
				(song) => song.id === id
			);
			if (songToEdit) {
				songToEdit.title = title;
			}
		},
		setSongs: (state, action) => {
			const newSongs = action.payload.map((el) => {
				return {
					id: el.id,
					img: el.album.images[0].url,
					title: `${el.name} - ${el.artists[0].name}`,
					time: formatTime(el.duration_ms),
					favourite: state.favouriteList.some(
						(song) => song.id === el.id
					),
				};
			});
			state.songs = newSongs;
		},
	},
});

export const { toggleFavourite, editFavouriteTitle, setSongs } =
	songsSlice.actions;
export default songsSlice.reducer;
