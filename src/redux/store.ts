import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songsSlice';

export const store = configureStore({
	reducer: {
		songs: songsReducer,
	},
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
