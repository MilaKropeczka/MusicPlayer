import React from 'react';
import styles from './SongList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavourite } from '../../../redux/songsSlice';

export default function SongList() {
	const songs = useSelector((state) => state.songs.songs);
	const dispatch = useDispatch();

	return (
		<div className={styles.container}>
			{songs.length !== 0 ? (
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
										dispatch(toggleFavourite(song));
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
