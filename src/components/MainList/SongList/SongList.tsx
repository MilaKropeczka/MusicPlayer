import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SongList.module.css';
import SongItem from './SongItem/SongItem';
import { State } from '../../../redux/store';

interface Song {
	id: string;
	img: string;
	title: string;
	time: string;
	favourite: boolean;
}

const SongList: React.FC = () => {
	const songs = useSelector((state: State) => state.songs.songs);

	return (
		<div className={styles.container}>
			{songs.length !== 0 ? (
				<ul className={styles.songItems}>
					{songs.map((song: Song, index: number) => (
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
};

export default SongList;
