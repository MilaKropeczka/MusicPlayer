import { useState, useEffect } from 'react';
import axios from 'axios';

const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const getAccessToken = async () => {
	try {
		const res = await axios.post(
			'https://accounts.spotify.com/api/token',
			'grant_type=client_credentials',
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization:
						'Basic ' + btoa(`${clientId}:${clientSecret}`),
				},
			}
		);

		return res.data.access_token;
	} catch (error) {
		throw new Error('Failed to fetch access token');
	}
};

const useSpotifyToken = () => {
	const [accessToken, setAccessToken] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchToken = async () => {
			try {
				let token = sessionStorage.getItem('spotifyAccessToken');
				if (!token) {
					token = await getAccessToken();
					sessionStorage.setItem('spotifyAccessToken', token);
				}
				setAccessToken(token);
			} catch (err) {
				setError(err.message);
			}
		};
		fetchToken();
	}, []);

	return { accessToken, error };
};

export default useSpotifyToken;
