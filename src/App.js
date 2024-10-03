import { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import SongList from './components/SongList/SongList';
import { ResultsProvider } from './context/ResultsContext';
import useSpotifyToken from './hooks/useSpotifyToken';

function App() {
	const { accessToken, error } = useSpotifyToken();
	const [isFavouriteListActive, setFavouriteListActive] = useState(true);

	if (error) return <div>Error: {error}</div>;
	if (!accessToken) return <div>Loading...</div>;
	return (
		<ResultsProvider>
			<div
				className='App'
				style={{ minHeight: '100vh', backgroundColor: 'black' }}>
				<Searchbar setFavouriteListActive={setFavouriteListActive} />
				<SongList
					isFavouriteListActive={isFavouriteListActive}
					setFavouriteListActive={setFavouriteListActive}
				/>
			</div>
		</ResultsProvider>
	);
}

export default App;
