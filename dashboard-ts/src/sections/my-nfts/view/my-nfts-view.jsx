import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, Stack, Typography, Button } from '@mui/material';
import { ethers, JsonRpcProvider, formatUnits, parseUnits } from 'ethers';
import { useRouter } from 'src/routes/hooks';
import axios from 'axios';

const marketplaceAddress = '0xED7c84E25Ef97B4561A1273eC9676b441E2543B0';
import NFTMarketplace from 'src/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

const MyNFTsView = () => {
	const [nfts, setNfts] = useState([]);
	const [loadingState, setLoadingState] = useState('not-loaded');
    const router = useRouter();
    
	useEffect(() => {
		loadNFTs();
    }, []);

    function convertIPFSUrl(inputUrl) {
		// Replace "ipfs://" with "https://ipfs.io/ipfs/"
		const outputUrl = inputUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');
		return outputUrl;
    }
    
	async function loadNFTs() {

		const provider = new ethers.BrowserProvider(window.ethereum);
		const signer = await provider.getSigner();

		const marketplaceContract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer);
		const data = await marketplaceContract.fetchMyNFTs();

		const items = await Promise.all(
			data.map(async i => {
				const tokenURI = await marketplaceContract.tokenURI(i.tokenId);
				const meta = await axios.get(convertIPFSUrl(tokenURI));
				let price = formatUnits(i.price.toString(), 'ether');
				let item = {
					price,
					tokenId: i.tokenId,
					seller: i.seller,
					owner: i.owner,
					image: meta.data.image,
					tokenURI
                };
                console.log('item:', item)
				return item;
			})
		);
		setNfts(items);
		setLoadingState('loaded');
	}
	function listNFT(nft) {
		console.log('nft:', nft);
		router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`);
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
					<Typography variant='h4'>My NFTs</Typography>
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
				<Typography variant='h4'>My NFTs</Typography>
			</Stack>
			{/* listing the nfts */}
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
								<Typography
									variant='body1'
									sx={{ mt: 2 }}
								>
									{nft.description}
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
                                
								<Button
									variant='contained'
									onClick={() => listNFT(nft)}
								>
									List
								</Button>
                            </div>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default MyNFTsView;
