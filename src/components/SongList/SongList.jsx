import React, { useContext, useEffect, useState } from 'react';
import styles from './SongList.module.css';
import img from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import ResultsContext from '../../context/ResultsContext';

export default function SongList() {
	const { results } = useContext(ResultsContext);
	const [songs, setSongs] = useState([
		{
			id: 1,
			img: img,
			title: 'My Life - Imagine Dragons ',
			views: '1543 obserwujących',
			time: '02:23',
		},
		{
			id: 2,
			img: img2,
			title: 'Bones - Imagine Dragons',
			views: '16543 obserwujących',
			time: '03:10',
		},
		{
			id: 3,
			img: img,
			title: 'My Life - Imagine Dragons ',
			views: '1543 obserwujących',
			time: '02:23',
		},
		{
			id: 4,
			img: img2,
			title: 'Bones - Imagine Dragons',
			views: '16543 obserwujących',
			time: '03:10',
		},
	]);

	useEffect(() => {
		results.map((el) => {
			// console.log(el);
			console.log(el.album.images[0].url);
			// console.log(el.artists[0].name);
			// console.log(el.name);
		});
	});
	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>Lista ulubionych utworów</h2>
			<ul className={styles.songItems}>
				{songs.map((song, index) => (
					<li key={song.id} className={styles.item}>
						<span className={styles.number}>{index + 1}</span>
						<img
							src={
								'https://i.scdn.co/image/ab67616d0000b2734efc70ac7d68e4ba8172cc4d'
							}
							// src={song.img}
							// src={img5}
							alt={song.title}
							className={styles.img}
						/>
						<span className={styles.title}>{song.title}</span>
						<span className={styles.views}>{song.views}</span>
						<span className={styles.time}>{song.time}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
