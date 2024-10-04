import React, { useContext } from 'react';
import SongList from './SongList/SongList';
import FavouriteList from './FavouriteList/FavouriteList';
import styles from './MainList.module.css';
import SwitchTabContext from '../../context/SwitchTabContext';

export default function MainList() {
	const { isFavouriteListActive, setFavouriteListActive } =
		useContext(SwitchTabContext);

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
			{isFavouriteListActive ? <FavouriteList /> : <SongList />}
		</div>
	);
}
