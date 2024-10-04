import React, { useState, useContext } from 'react';
import styles from './Searchbar.module.css';
import useSpotifySearch from '../../hooks/useSpotifySearch';
import SwitchTabContext from '../../context/SwitchTabContext';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const SpotifySearch = () => {
	const [value, setValue] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const { setFavouriteListActive } = useContext(SwitchTabContext);

	useSpotifySearch(searchTerm);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(value);
		setFavouriteListActive(false);
	};

	return (
		<div className={styles.container}>
			<div className='box'>
				<h2 className={styles.h2}>Znajdź swój ulubiony utwór!</h2>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Input
						value={value}
						placeholder='Nazwa utworu...'
						onChange={(e) => setValue(e.target.value || '')}
					/>
					<Button>Wyszukaj</Button>
				</form>
			</div>
		</div>
	);
};

export default SpotifySearch;
