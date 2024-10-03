import React, { useContext, useEffect, useState } from 'react';
import styles from './SongList.module.css';
import ResultsContext from '../../context/ResultsContext';

export default function SongList(props) {
	const { results } = useContext(ResultsContext);
	const [songs, setSongs] = useState([]);
	const [favouriteList, setFavouriteList] = useState([]);
	// const [isFavouriteListActive, setFavouriteListActive] = useState(true);
	const isFavouriteListActive = props.isFavouriteListActive;
	const setFavouriteListActive = props.setFavouriteListActive;

	useEffect(() => {
		if (results) {
			const newSongs = results.map((el) => {
				return {
					id: Math.random(),
					img: el.album.images[0].url,
					title: `${el.name} - ${el.artists[0].name}`,
					time: el.duration_ms,
					favourite: false,
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
				const exists = prev.some((x) => x.id === song.id);
				return exists ? prev : [...prev, { ...newSong }];
			});
		} else {
			setFavouriteList((prev) => prev.filter((x) => x.id !== song.id));
		}
		setSongs(updatedSongs);
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
					<>
						<ul className={styles.songItems}>
							{favouriteList.map((song, index) => (
								<li key={song.id} className={styles.item}>
									<span className={styles.number}>
										{index + 1}
									</span>
									<img
										src={song.img}
										alt={song.title}
										className={styles.img}
									/>
									<span className={styles.title}>
										{song.title}
									</span>
									<span className={styles.time}>
										{song.time}
									</span>
									<span className={styles.edit}>
										<i className='fa-solid fa-pen-to-square'></i>
									</span>
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
					</>
				) : (
					<p className={styles.p}>
						Nie dodałaś jeszcze żadnych piosenek do ulubionych
					</p>
				)
			) : (
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
			)}
			<div className={styles.audioContainer}>
				<audio className={styles.audioPlayer} controls>
					<source src='#' type='audio/mpeg' />
					Twoja przeglądarka nie obsługuje elementu audio.
				</audio>
			</div>
		</div>
	);
}
