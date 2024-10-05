import React, { useState } from 'react';
import styles from './FavouriteList.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite, editFavouriteTitle } from '../../../redux/songsSlice';

export default function FavouriteList() {
	const favouriteList = useSelector((state) => state.songs.favouriteList);
	const dispatch = useDispatch();

	const [editMode, setEditMode] = useState(null);
	const [editTitle, setEditTitle] = useState('');

	const editFavouriteSongTitle = (id) => {
		dispatch(editFavouriteTitle({ id, title: editTitle }));
		setEditMode(null);
	};

	return (
		<div className={styles.container}>
			{favouriteList.length !== 0 ? (
				<ul className={styles.songItems}>
					{favouriteList.map((song, index) => (
						<li
							key={song.id}
							className={`${styles.item} ${
								editMode === song.id ? styles.editing : ''
							}`}>
							<span className={styles.number}>{index + 1}</span>
							<img
								src={song.img}
								alt={song.title}
								className={styles.img}
							/>
							{editMode === song.id ? (
								<Input
									value={editTitle}
									onChange={(e) =>
										setEditTitle(e.target.value)
									}
								/>
							) : (
								<span className={styles.title}>
									{song.title}
								</span>
							)}

							{editMode ? (
								<>
									{editMode === song.id && (
										<Button
											onClick={() =>
												editFavouriteSongTitle(song.id)
											}>
											Zapisz
										</Button>
									)}
								</>
							) : (
								<>
									<span className={styles.time}>
										{song.time}
									</span>
									<span className={styles.edit}>
										<i
											className='fa-solid fa-pen-to-square'
											onClick={() => {
												setEditMode(song.id);
												setEditTitle(song.title);
											}}></i>
									</span>
									<span className={styles.favourite}>
										<i
											className='fa-solid fa-heart'
											onClick={() => {
												dispatch(toggleFavourite(song));
											}}></i>
									</span>
								</>
							)}
						</li>
					))}
				</ul>
			) : (
				<p className={styles.p}>
					Nie dodałeś jeszcze żadnych piosenek do ulubionych
				</p>
			)}
		</div>
	);
}
