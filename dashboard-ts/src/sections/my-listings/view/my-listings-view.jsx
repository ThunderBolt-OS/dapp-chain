import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, Stack, Typography, Button } from '@mui/material';
import { ethers, JsonRpcProvider, formatUnits, parseUnits } from 'ethers';
import { useRouter } from 'src/routes/hooks';
import axios from 'axios';

import { convertIPFSUrl } from 'src/utils/convertIPFSUrl';
import { NoNFTs } from 'src/components';
import { MARKETPLACE_CONTRACT_ADDRESS } from 'src/constants';
import NFTMarketplace from 'src/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

const MyListingsView = () => {
	const [nfts, setNfts] = useState([]);
    const [loadingState, setLoadingState] = useState('not-loaded');
    
	useEffect(() => {
		loadNFTs();
    }, []);
    
	async function loadNFTs() {
		const provider = new ethers.BrowserProvider(window.ethereum);

		const signer = await provider.getSigner();

		const contract = new ethers.Contract(MARKETPLACE_CONTRACT_ADDRESS, NFTMarketplace.abi, signer);
		const data = await contract.fetchItemsListed();

		const items = await Promise.all(
			data.map(async i => {
				const tokenUri = await contract.tokenURI(i.tokenId);
				const meta = await axios.get(convertIPFSUrl(tokenUri));
				let price = formatUnits(i.price.toString(), 'ether');
				let item = {
					price,
					tokenId: i.tokenId,
					seller: i.seller,
					owner: i.owner,
					image: convertIPFSUrl(meta.data.image)
				};
				return item;
			})
		);

		setNfts(items);
		setLoadingState('loaded');
    };

    if (loadingState === 'loaded' && !nfts.length)
		return (
			<NoNFTs
				title='My Listings'
				body='No items in the List'
			/>
		);

	return (
		<Container>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				mb={5}
			>
				<Typography variant='h4'>My Listings</Typography>
			</Stack>
			<Grid
				container
				spacing={4}
			>
				{nfts.map((nft, i) => (
					<Grid
						item
						key={i}
						xs={12}
						sm={6}
						md={4}
					>
						<Card
							sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%'
							}}
						>
							<div>
								<img
									src={nft.image}
									alt={nft.name}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover'
									}}
								/>
								<Typography
									variant='h5'
									sx={{ mt: 2 }}
								>
                                    {nft.name}
								</Typography>
								
							</div>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginTop: 'auto'
								}}
							>
								<Typography
									variant='h5'
									sx={{ mt: 2 }}
								>
									{nft.price} ETH
								</Typography>

								
							</div>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default MyListingsView;
