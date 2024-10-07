import React from 'react';
import styles from './AudioComponent.module.css';

const AudioComponent: React.FC = () => {
	return (
		<div className={styles.audioContainer}>
			<audio className={styles.audioPlayer} controls>
				<source src='#' type='audio/mpeg' />
				Twoja przeglądarka nie obsługuje elementu audio.
			</audio>
		</div>
	);
};

export default AudioComponent;
