import React, { useState } from 'react';
import styles from '../FavouriteList.module.css';
import EditTitle from '../EditTitle/EditTitle';
import { useDispatch } from 'react-redux';
import { editFavouriteTitle } from '../../../../redux/songsSlice';
import FavouriteIcon from '../../FavouriteIcon/FavouriteIcon';

interface Song {
	id: string;
	img: string;
	title: string;
	time: string;
	favourite: boolean;
}

interface FavouriteSongItemProps {
	song: Song;
	index: number;
}

const FavouriteSongItem: React.FC<FavouriteSongItemProps> = ({
	song,
	index,
}) => {
	const dispatch = useDispatch();
	const [editMode, setEditMode] = useState<string | null>(null);
	const [editTitle, setEditTitle] = useState<string>('');

	const editFavouriteSongTitle = (id: string) => {
		dispatch(editFavouriteTitle({ id, title: editTitle }));
		setEditMode(null);
	};

	return (
		<li
			key={song.id}
			className={`${styles.item} ${
				editMode === song.id ? styles.editing : ''
			}`}>
			<span className={styles.number}>{index + 1}</span>
			<img src={song.img} alt={song.title} className={styles.img} />

			{editMode === song.id ? (
				<EditTitle
					editTitle={editTitle}
					setEditTitle={setEditTitle}
					editFavouriteSongTitle={() =>
						editFavouriteSongTitle(song.id)
					}
				/>
			) : (
				<>
					<span className={styles.title}>{song.title}</span>
					<span className={styles.time}>{song.time}</span>
					<span className={styles.edit}>
						<i
							className='fa-solid fa-pen-to-square'
							onClick={() => {
								setEditMode(song.id);
								setEditTitle(song.title);
							}}></i>
					</span>
					<span className={styles.favourite}>
						<FavouriteIcon song={song} />
					</span>
				</>
			)}
		</li>
	);
};

export default FavouriteSongItem;
