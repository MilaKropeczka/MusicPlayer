import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SongList.module.css';
import SongItem from './SongItem/SongItem';

export default function SongList() {
	const songs = useSelector((state) => state.songs.songs);

	return (
		<div className={styles.container}>
			{songs.length !== 0 ? (
				<ul className={styles.songItems}>
					{songs.map((song, index) => (
						<SongItem key={song.id} song={song} index={index} />
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
