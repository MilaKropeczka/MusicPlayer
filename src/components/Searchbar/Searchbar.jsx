import React, { useContext, useState } from 'react';
import ResultsContext from '../../context/ResultsContext';
import styles from './Searchbar.module.css';
import axios from 'axios';

const SpotifySearch = () => {
	const [value, setValue] = useState('');
	const { setResults } = useContext(ResultsContext);

	const handleSearch = async (e) => {
		e.preventDefault();

		const token = sessionStorage.getItem('spotifyAccessToken');

		try {
			const response = await axios.get(
				`https://api.spotify.com/v1/search`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params: {
						q: value,
						type: 'track',
					},
				}
			);

			setResults(response.data.tracks.items);
		} catch (error) {
			console.error('Error fetching data from Spotify API:', error);
		}
	};

	return (
		<div className={styles.container}>
			<div className='box'>
				<h2 className={styles.h2}>Znajdź swój ulubiony utwór!</h2>
				<form className={styles.form} onSubmit={handleSearch}>
					<input
						className={styles.input}
						type='text'
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder='Nazwa utworu...'
					/>
					<button className={styles.button} type='submit'>
						Wyszukaj
					</button>
				</form>
			</div>
		</div>
	);
};

export default SpotifySearch;
