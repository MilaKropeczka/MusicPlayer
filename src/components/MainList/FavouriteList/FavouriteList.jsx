import React from 'react';
import styles from './FavouriteList.module.css';
import FavouriteItem from './FavouriteItem/FavouriteItem';
import { useSelector } from 'react-redux';

export default function FavouriteList() {
	const favouriteList = useSelector((state) => state.songs.favouriteList);

	return (
		<div className={styles.container}>
			{favouriteList.length !== 0 ? (
				<ul className={styles.songItems}>
					{favouriteList.map((song, index) => (
						<FavouriteItem
							key={song.id}
							song={song}
							index={index}
						/>
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
