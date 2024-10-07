import {
	createContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

const defaultContextValue: SwitchTabContextProps = {
	isFavouriteListActive: true,
	setFavouriteListActive: () => {},
};

const SwitchTabContext =
	createContext<SwitchTabContextProps>(defaultContextValue);

interface SwitchTabContextProps {
	isFavouriteListActive: boolean;
	setFavouriteListActive: Dispatch<SetStateAction<boolean>>;
}

interface SwitchTabProviderProps {
	children: ReactNode;
}

export const SwitchTabProvider: React.FC<SwitchTabProviderProps> = ({
	children,
}) => {
	const [isFavouriteListActive, setFavouriteListActive] =
		useState<boolean>(false);

	return (
		<SwitchTabContext.Provider
			value={{ isFavouriteListActive, setFavouriteListActive }}>
			{children}
		</SwitchTabContext.Provider>
	);
};

export default SwitchTabContext;
