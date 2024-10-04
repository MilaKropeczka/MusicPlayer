import React, { useContext, useEffect, useState } from 'react';
import styles from './SongList.module.css';
import ResultsContext from '../../context/ResultsContext';
import { formatTime } from '../../helpers/formatTime';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

export default function SongList(props) {
	const { results } = useContext(ResultsContext);
	const [songs, setSongs] = useState([]);
	const [favouriteList, setFavouriteList] = useState([]);
	const [editMode, setEditMode] = useState(null);
	const [editTitle, setEditTitle] = useState('');

	const isFavouriteListActive = props.isFavouriteListActive;
	const setFavouriteListActive = props.setFavouriteListActive;

	useEffect(() => {
		if (results) {
			const newSongs = results.map((el) => {
				return {
					id: el.id,
					img: el.album.images[0].url,
					title: `${el.name} - ${el.artists[0].name}`,
					time: formatTime(el.duration_ms),
					favourite: favouriteList.some((song) => song.id === el.id),
				};
			});
			setSongs(newSongs);
		}
	}, [results]);

	const toggleFavourite = (song) => {
		const newSong = { ...song, favourite: true };
		const updatedSongs = songs.map((el) =>
			el.id === song.id ? { ...el, favourite: !el.favourite } : el
		);
		if (!song.favourite) {
			setFavouriteList((prev) => {
				const exists = prev.some(
					(x) => x.id === song.id || x.title === song.title
				);
				return exists ? prev : [...prev, { ...newSong }];
			});
		} else {
			setFavouriteList((prev) => prev.filter((x) => x.id !== song.id));
		}
		setSongs(updatedSongs);
	};

	const editFavouriteSongTitle = (id) => {
		const updatedFavouriteList = favouriteList.map((song) =>
			song.id === id ? { ...song, title: editTitle } : song
		);
		setFavouriteList(updatedFavouriteList);
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
