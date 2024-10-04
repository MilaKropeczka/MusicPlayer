import React, { useState, useContext } from 'react';
import styles from './SongList.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import {
	addFavourite,
	removeFavourite,
	editFavouriteTitle,
} from '../../redux/songsSlice';
import SwitchTabContext from '../../context/SwitchTabContext';

export default function SongList() {
	const { isFavouriteListActive, setFavouriteListActive } =
		useContext(SwitchTabContext);
	const songs = useSelector((state) => state.songs.songs);
	const favouriteList = useSelector((state) => state.songs.favouriteList);
	const dispatch = useDispatch();

	const [editMode, setEditMode] = useState(null);
	const [editTitle, setEditTitle] = useState('');

	const toggleFavourite = (song) => {
		if (!song.favourite) {
			dispatch(addFavourite(song));
		} else {
			dispatch(removeFavourite(song));
		}
	};

	const editFavouriteSongTitle = (id) => {
		dispatch(editFavouriteTitle({ id, title: editTitle }));
		setEditMode(null);
	};

	return (
		<div className={styles.container}>
			<div className={styles.headingContainer}>
				<h2
					className={`${
						!isFavouriteListActive
							? styles.headingTwo
							: styles.heading
					}`}
					onClick={() => setFavouriteListActive(true)}>
					Lista ulubionych utworów
				</h2>
				<h2
					className={`${
						isFavouriteListActive
							? styles.headingTwo
							: styles.heading
					}`}
					onClick={() => setFavouriteListActive(false)}>
					Wyszukiwane utwory
				</h2>
			</div>
			{isFavouriteListActive ? (
				favouriteList.length !== 0 ? (
					<ul className={styles.songItems}>
						{favouriteList.map((song, index) => (
							<li
								key={song.id}
								className={`${styles.item} ${
									editMode === song.id ? styles.editing : ''
								}`}>
								<span className={styles.number}>
									{index + 1}
								</span>
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
								<span className={styles.time}>{song.time}</span>
								<span className={styles.edit}>
									<i
										className='fa-solid fa-pen-to-square'
										onClick={() => {
											setEditMode(song.id);
											setEditTitle(song.title);
										}}></i>
								</span>
								{editMode === song.id && (
									<Button
										onClick={() =>
											editFavouriteSongTitle(song.id)
										}>
										Zapisz
									</Button>
								)}
								<span className={styles.favourite}>
									<i
										className={
											song.favourite
												? 'fa-solid fa-heart'
												: 'fa-regular fa-heart'
										}
										onClick={() => {
											toggleFavourite(song);
										}}></i>
								</span>
							</li>
						))}
					</ul>
				) : (
					<p className={styles.p}>
						Nie dodałaś jeszcze żadnych piosenek do ulubionych
					</p>
				)
			) : songs.length !== 0 ? (
				<ul className={styles.songItems}>
					{songs.map((song, index) => (
						<li key={song.id} className={styles.item}>
							<span className={styles.number}>{index + 1}</span>
							<img
								src={song.img}
								alt={song.title}
								className={styles.img}
							/>
							<span className={styles.title}>{song.title}</span>
							<span className={styles.time}>{song.time}</span>
							<span className={styles.favourite}>
								<i
									className={
										song.favourite
											? 'fa-solid fa-heart'
											: 'fa-regular fa-heart'
									}
									onClick={() => {
										toggleFavourite(song);
									}}></i>
							</span>
						</li>
					))}
				</ul>
			) : (
				<p className={styles.p}>
					Nie wyszukałeś jeszcze żadnego utworu
				</p>
			)}
		</div>
	);
}
