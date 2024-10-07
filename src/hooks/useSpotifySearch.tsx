import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setSongs } from '../redux/songsSlice';

const useSpotifySearch = (value: string) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchSongs = async () => {
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

				dispatch(setSongs(response.data.tracks.items));
			} catch (error) {
				console.error('Error fetching data from Spotify API:', error);
			}
		};

		if (value) {
			fetchSongs();
		}
	}, [dispatch, value]);
};

export default useSpotifySearch;
