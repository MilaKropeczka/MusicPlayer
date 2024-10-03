import React, { useContext, useEffect, useState } from 'react';
import styles from './SongList.module.css';
import ResultsContext from '../../context/ResultsContext';

export default function SongList() {
	const { results } = useContext(ResultsContext);
	const [songs, setSongs] = useState([]);
	const [favourite, setFavourite] = useState(true);

	useEffect(() => {
		if (results) {
			const newSongs = results.map((el, index) => {
				return {
					id: index + 1,
					img: el.album.images[0].url,
					title: `${el.name} - ${el.artists[0].name}`,
					time: el.duration_ms,
				};
			});
			setSongs(newSongs);
		}
	}, [results]);

	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>Lista ulubionych utworów</h2>
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
						<span className={styles.views}>{song.views}</span>
						<span className={styles.time}>{song.time}</span>
						<span className={styles.favourite}>
							{favourite ? (
								<i className='fa-solid fa-heart'></i>
							) : (
								<i className='fa-regular fa-heart'></i>
							)}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
