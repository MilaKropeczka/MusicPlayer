import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavourite } from '../../../redux/songsSlice';

const FavouriteIcon = ({ song }) => {
	const dispatch = useDispatch();

	return (
		<i
			className={
				song.favourite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'
			}
			onClick={() => dispatch(toggleFavourite(song))}></i>
	);
};

export default FavouriteIcon;
