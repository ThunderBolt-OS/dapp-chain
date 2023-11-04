import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, Stack, Typography, Button } from '@mui/material';
import { ethers, JsonRpcProvider, formatUnits, parseUnits } from 'ethers';
import axios from 'axios';

import ProductCard from 'src/components/cards/product-card';
const marketplaceAddress = '0xED7c84E25Ef97B4561A1273eC9676b441E2543B0';
import NFTMarketplace from 'src/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

const MarketplaceView = () => {
	const [nfts, setNfts] = useState([]);
	const [loadingState, setLoadingState] = useState('not-loaded');

	useEffect(() => {
		loadNFTs();
	}, []);

	function convertIPFSUrl(inputUrl) {
		// Replace "ipfs://" with "https://ipfs.io/ipfs/"
		const outputUrl = inputUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');
		return outputUrl;
	}

	async function loadNFTs() {
		try {
			const provider = new ethers.BrowserProvider(window.ethereum);
			const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider);
			const data = await contract.fetchMarketItems();

			const items = await Promise.all(
				data.map(async i => {
					const tokenUri = await contract.tokenURI(i.tokenId);
					console.log('tokenUri:', tokenUri);
					const ipfsData = await axios.get(convertIPFSUrl(tokenUri));
					console.log('ipfsData:', ipfsData.data);
					const meta = ipfsData.data;

					let price = formatUnits(i.price.toString(), 'ether');
					let item = {
						price,
						tokenId: i.tokenId,
						seller: i.seller,
						owner: i.owner,
						image: meta.image.replace('ipfs://', 'https://ipfs.io/ipfs/'),
						name: meta.name,
						description: meta.description
					};
					return item;
				})
			);

			const filteredItems = items.filter(item => item !== null);
			setNfts(filteredItems);
			setLoadingState('loaded');
		} catch (error) {
			console.error('Error loading NFTs:', error);
			setLoadingState('error');
		}
	}

	async function buyNft(nft) {
		/* needs the user to sign the transaction, so will use Web3Provider and sign it */
		const provider = new ethers.BrowserProvider(window.ethereum);
		const signer = await provider.getSigner();
		const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer);

		/* user will be prompted to pay the asking price to complete the transaction */
		const price = parseUnits(nft.price.toString(), 'ether');
		const transaction = await contract.createMarketSale(nft.tokenId, {
			value: price
		});
		await transaction.wait();
		loadNFTs();
	}

	if (loadingState === 'loaded' && !nfts.length)
		return (
			<Container>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
					mb={5}
				>
					<Typography variant='h4'>NFT Marketplace</Typography>
				</Stack>
				<Grid
					container
					sx={{
						height: 'calc(60vh - 64px)',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Typography variant='h6'>No items in the marketplace</Typography>
				</Grid>
			</Container>
		);

	return (
		<Container>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				mb={5}
			>
				<Typography variant='h4'>NFT Marketplace</Typography>
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
									src={nft.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
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
								{/* <Typography
									variant='body1'
									sx={{ mt: 2 }}
								>
									{nft.description}
								</Typography> */}
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
								<Button
									variant='contained'
									onClick={() => buyNft(nft)}
								>
									Buy
								</Button>
							</div>
						</Card>
					</Grid>
				))}

				{/* product card component */}
			</Grid>
			{/* here is the product card component
			<Grid container>
				{nfts.map((nft, i) => (
					<Grid
						item
						key={i}
						xs={12}
						sm={6}
						md={4}
					>
						<ProductCard
							price={nft.price}
							name={nft.name}
							image={nft.image}
						/>
					</Grid>
				))}
			</Grid> */}
		</Container>
	);
};

export default MarketplaceView;
