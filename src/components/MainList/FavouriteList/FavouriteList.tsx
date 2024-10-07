import React from 'react';
import styles from './FavouriteList.module.css';
import FavouriteItem from './FavouriteItem/FavouriteItem';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

interface Song {
	id: string;
	img: string;
	title: string;
	time: string;
	favourite: boolean;
}

const FavouriteList: React.FC = () => {
	const favouriteList = useSelector(
		(state: State) => state.songs.favouriteList
	);

	return (
		<div className={styles.container}>
			{favouriteList.length !== 0 ? (
				<ul className={styles.songItems}>
					{favouriteList.map((song: Song, index: number) => (
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
};

export default FavouriteList;
