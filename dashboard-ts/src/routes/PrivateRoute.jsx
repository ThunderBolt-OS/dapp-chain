import { useWallet } from '../contexts/WalletContext';
import React, { useEffect } from 'react';
import { useRouter } from 'src/routes/hooks';

const PrivateRoute = ({ element }) => {
	const { metaMaskData } = useWallet();
	const { isMetaMaskConnected } = metaMaskData;
	const router = useRouter();

	useEffect(() => {
		if (!isMetaMaskConnected) {
			router.push('/connect');
		}
	}, []);

	return isMetaMaskConnected ? element : null;
	// return element;
};

export default PrivateRoute;
