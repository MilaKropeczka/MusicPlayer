import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import { SwitchTabProvider } from './context/SwitchTabContext';
import useSpotifyToken from './hooks/useSpotifyToken';
import MainList from './components/MainList/MainList';
import AudioComponent from './components/AudioComponent/AudioComponent';

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
				<MainList />
				<AudioComponent />
			</div>
		</SwitchTabProvider>
	);
}

export default App;
