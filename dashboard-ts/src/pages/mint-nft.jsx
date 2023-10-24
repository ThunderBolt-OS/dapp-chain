import { Helmet } from 'react-helmet-async';

import { MintNFTView } from 'src/sections/mint-nft/view';

// ----------------------------------------------------------------------

export default function MintNFT() {
	return (
		<>
			<Helmet>
				<title> Mint NFT | Minimal UI </title>
			</Helmet>

			<MintNFTView />
		</>
	);
}
