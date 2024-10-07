import React, { useState, useContext, FormEvent } from 'react';
import styles from './Searchbar.module.css';
import useSpotifySearch from '../../hooks/useSpotifySearch';
import SwitchTabContext from '../../context/SwitchTabContext';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const SpotifySearch: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const [searchTerm, setSearchTerm] = useState<string>('');

	const { setFavouriteListActive } = useContext(SwitchTabContext);

	useSpotifySearch(searchTerm);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
