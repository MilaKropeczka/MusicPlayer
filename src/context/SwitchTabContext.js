import React, { createContext, useState } from 'react';

const SwitchTabContext = createContext();

export const SwitchTabProvider = ({ children }) => {
	const [isFavouriteListActive, setFavouriteListActive] = useState([]);

	return (
		<SwitchTabContext.Provider
			value={{ isFavouriteListActive, setFavouriteListActive }}>
			{children}
		</SwitchTabContext.Provider>
	);
};

export default SwitchTabContext;
