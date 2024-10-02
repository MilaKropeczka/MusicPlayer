import './App.css';
import SongList from './components/SongList/SongList';

function App() {
	return (
		<div
			className='App'
			style={{ minHeight: '100vh', backgroundColor: 'black' }}>
			<SongList />
		</div>
	);
}

export default App;
