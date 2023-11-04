import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, Stack, Typography, Button } from '@mui/material';
import { ethers, JsonRpcProvider, formatUnits, parseUnits } from 'ethers';
import axios from 'axios';

import { convertIPFSUrl } from 'src/utils/convertIPFSUrl';
import { NoNFTs } from 'src/components';
import ProductCard from '../product-card';

const marketplaceAddress = '0xED7c84E25Ef97B4561A1273eC9676b441E2543B0';
import { MARKETPLACE_CONTRACT_ADDRESS } from 'src/constants';
import NFTMarketplace from 'src/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

const MarketplaceView = () => {
	const [nfts, setNfts] = useState([]);
	const [loadingState, setLoadingState] = useState('not-loaded');

	useEffect(() => {
		loadNFTs();
	}, []);

	async function loadNFTs() {
		try {
			const provider = new ethers.BrowserProvider(window.ethereum);
			const contract = new ethers.Contract(MARKETPLACE_CONTRACT_ADDRESS, NFTMarketplace.abi, provider);
			const data = await contract.fetchMarketItems();

			const items = await Promise.all(
				data.map(async i => {
					const tokenUri = await contract.tokenURI(i.tokenId);
					const ipfsData = await axios.get(convertIPFSUrl(tokenUri));
					const meta = ipfsData.data;

					let price = formatUnits(i.price.toString(), 'ether');
					let item = {
						price,
						tokenId: i.tokenId,
						seller: i.seller,
						owner: i.owner,
						image: convertIPFSUrl(meta.image),
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
			<NoNFTs
				title='NFT Marketplace'
				body='No items in the marketplace'
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
				<Typography variant='h4'>NFT Marketplace</Typography>
			</Stack>
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
							buyNft={() => buyNft(nft)}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default MarketplaceView;
