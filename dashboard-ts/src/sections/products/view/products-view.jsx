import { useEffect, useState } from 'react';
import { Stack, Container, Grid, Typography } from '@mui/material'; // Removed the import alias for Grid
import { JSON_RPC_URL } from 'src/constants';
import { useRouter } from 'src/routes/hooks';
import { fShortenNumber } from 'src/utils/format-number';
import { products } from 'src/_mock/products';
import ProductCard from '../product-card';

export default function ProductsView() {
	const router = useRouter();

	// state for the block number
	const [blockNumber, setBlockNumber] = useState(null);

	const promises = [];
	const blockDataArray = [];

	useEffect(() => {
		const jsonRpcUrl = JSON_RPC_URL;

		// Fetch for fetching the integer of the current block number the client is on.
		fetch(jsonRpcUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				jsonrpc: '2.0',
				method: 'eth_blockNumber',
				params: [],
				id: 1
			})
		})
			.then(response => response.json())
			.then(data => {
				setBlockNumber(parseInt(data.result, 16));
			})
			.catch(error => {
				console.log(error);
			});

		// Since we got the number of blocks the client is on, then we run a for loop to get detailed data of each block

		for (let i = 1; i <= blockNumber; i++) {
			promises.push(
				fetch(jsonRpcUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						jsonrpc: '2.0',
						method: 'eth_getBlockByNumber',
						params: [`i`, true],
						id: i
					})
				})
			);
		}

		Promise.all(promises)
			.then(responses => {
				return Promise.all(responses.map(response => response.json()));
			})
			.then(dataArray => {
				blockDataArray.push(...dataArray);
				console.log('All block data:', blockDataArray);
			})
			.catch(error => {
				console.log(error);
			});
	}, [blockNumber]);

	console.log('This is data of all blocks', blockDataArray);

	return (
		<Container>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				mb={5}
			>
				<Typography variant='h4'>My Products</Typography>
			</Stack>

			<Grid
				container
				spacing={3}
			>
				{products.map(product => (
					<Grid
						key={product.id}
						xs={12}
						sm={6}
						md={3}
					>
						<ProductCard product={product} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
