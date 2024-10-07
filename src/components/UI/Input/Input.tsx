import React, { ChangeEvent } from 'react';
import styles from './Input.module.css';

interface InputProps {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
	return (
		<input
			className={styles.input}
			type='text'
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;
