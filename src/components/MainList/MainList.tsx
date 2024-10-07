import React, { useContext } from 'react';
import SongList from './SongList/SongList';
import FavouriteList from './FavouriteList/FavouriteList';
import styles from './MainList.module.css';
import SwitchTabContext from '../../context/SwitchTabContext';

const MainList: React.FC = () => {
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
					Lista ulubionych{' '}
					<span className={styles.desktop}>utworów</span>
				</h2>
				<h2
					className={`${
						isFavouriteListActive
							? styles.headingTwo
							: styles.heading
					}`}
					onClick={() => setFavouriteListActive(false)}>
					Wyszukiwane <span className={styles.desktop}>utwory</span>
				</h2>
			</div>
			{isFavouriteListActive ? <FavouriteList /> : <SongList />}
		</div>
	);
};

export default MainList;
