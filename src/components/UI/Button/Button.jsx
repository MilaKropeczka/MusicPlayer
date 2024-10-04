import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, onClick }) {
	return (
		<button className={styles.button} type='submit' onClick={onClick}>
			{children}
		</button>
	);
}
