import React from 'react';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';

interface EditItemProps {
	editTitle: string;
	setEditTitle: (value: string) => void;
	editFavouriteSongTitle: () => void;
}

const EditItem: React.FC<EditItemProps> = ({
	editTitle,
	setEditTitle,
	editFavouriteSongTitle,
}) => {
	return (
		<>
			<Input
				value={editTitle}
				onChange={(e) => setEditTitle(e.target.value)}
			/>
			<Button onClick={editFavouriteSongTitle}>Zapisz</Button>
		</>
	);
};

export default EditItem;
