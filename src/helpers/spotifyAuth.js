const getAccessToken = async () => {
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
		},
		body: 'grant_type=client_credentials',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch access token');
	}

	const data = await res.json();
	sessionStorage.setItem('spotify_access_token', data.access_token);
	return data.access_token;
};

export const getSpotifyToken = async () => {
	let token = sessionStorage.getItem('spotify_access_token');
	if (!token) {
		token = await getAccessToken();
	}
	return token;
};
