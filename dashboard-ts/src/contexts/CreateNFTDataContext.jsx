import React, { createContext, useContext, useState } from 'react';

export const CreateNFTDataContext = createContext({
	nftFormData: {
		base64Image: '',
		title: '',
		description: '',
		price: ''
	},
	updateNftFormData: () => {}
});

export function CreateNFTDataContextProvider ({children}) {
	const [nftFormData, setNftFormData] = useState({
		base64Image: '',
		title: '',
		description: '',
		price: ''
	});

	const updateNftFormData = newNftFormData => {
		setNftFormData(prevNFTFormData => ({
			...prevNFTFormData,
			...newNftFormData
		}));
	};

	const CreateNFTDataContextProps = {
		nftFormData,
		updateNftFormData
	};

	return (
		<CreateNFTDataContext.Provider value={CreateNFTDataContextProps}>
			{children}
		</CreateNFTDataContext.Provider>
	);
};

export function useCreateNFT() {
	const context = useContext(CreateNFTDataContext);
	if (!context) {
		throw new Error('useCreateNFT must be used within a CreateNFTDataContextProvider');
	}
	return context;
}

// export default CreateNFTDataContextProvider;
