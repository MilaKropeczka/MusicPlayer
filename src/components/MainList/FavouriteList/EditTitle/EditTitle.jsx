import React from 'react';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';

export default function EditItem({
	editTitle,
	setEditTitle,
	editFavouriteSongTitle,
}) {
	return (
		<>
			<Input
				value={editTitle}
				onChange={(e) => setEditTitle(e.target.value)}
			/>
			<Button onClick={editFavouriteSongTitle}>Zapisz</Button>
		</>
	);
}
