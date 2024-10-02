import React, { useState } from 'react';

export default function SongList() {
	const [songs] = useState([
		{
			id: 1,
			img: 'zdj',
			title: 'tytul',
			views: 'obserwujacy',
			time: 'czas',
		},
		{
			id: 2,
			img: 'zdj2',
			title: 'tytul2',
			views: 'obserwujacy2',
			time: 'czas2',
		},
	]);
	return (
		<div>
			<h2>Lista ulubionych utworów</h2>
			<ul>
				{songs.map((song) => (
					<li key={song.id}>
						{song.img} | {song.title}| {song.views}| {song.time}
					</li>
				))}
			</ul>
		</div>
	);
}
