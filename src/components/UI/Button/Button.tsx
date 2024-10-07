import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button className={styles.button} type='submit' onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
