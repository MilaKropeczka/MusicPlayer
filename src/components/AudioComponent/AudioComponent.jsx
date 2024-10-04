import React from 'react';
import styles from './AudioComponent.module.css';

export default function AudioComponent() {
	return (
		<div className={styles.audioContainer}>
			<audio className={styles.audioPlayer} controls>
				<source src='#' type='audio/mpeg' />
				Twoja przeglądarka nie obsługuje elementu audio.
			</audio>
		</div>
	);
}
