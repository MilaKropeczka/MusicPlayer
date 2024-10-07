import React from 'react';
import styles from './SongItem.module.css';
import FavouriteIcon from '../../FavouriteIcon/FavouriteIcon';

const SongItem = ({ song, index }) => {
	return (
		<li key={song.id} className={styles.item}>
			<span className={styles.number}>{index + 1}</span>
			<img src={song.img} alt={song.title} className={styles.img} />
			<span className={styles.title}>{song.title}</span>
			<span className={styles.time}>{song.time}</span>
			<span className={styles.favourite}>
				<FavouriteIcon song={song} />
			</span>
		</li>
	);
};

export default SongItem;
