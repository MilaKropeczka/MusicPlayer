import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import SongList from './components/SongList/SongList';
import { SwitchTabProvider } from './context/SwitchTabContext';
import useSpotifyToken from './hooks/useSpotifyToken';

function App() {
	const { accessToken, error } = useSpotifyToken();

	if (error) return <div>Error: {error}</div>;
	if (!accessToken) return <div>Loading...</div>;
	return (
		<SwitchTabProvider>
			<div
				className='App'
				style={{ minHeight: '100vh', backgroundColor: 'black' }}>
				<Searchbar />
				<SongList />
			</div>
		</SwitchTabProvider>
	);
}

export default App;
