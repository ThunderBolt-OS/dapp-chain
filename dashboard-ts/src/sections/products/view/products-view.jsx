import { useEffect, useState } from 'react';
import { Stack, Container, Grid, Typography, Pagination, useTheme, Box } from '@mui/material'; // Added Pagination component
import { JSON_RPC_URL } from 'src/constants';
import { useRouter } from 'src/routes/hooks';
import { fShortenNumber } from 'src/utils/format-number';
import { products } from 'src/_mock/products';
import ProductCard from '../product-card';

export default function ProductsView() {
	const router = useRouter();
	const theme = useTheme();

	// state for the block number
	const [blockNumber, setBlockNumber] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 50; // Number of blocks to fetch per page

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
	}, []);

	useEffect(() => {
		const jsonRpcUrl = JSON_RPC_URL;

		if (blockNumber) {
			// Fetch a limited number of blocks based on pagination
			const startIndex = (currentPage - 1) * itemsPerPage + 1;
			const endIndex = Math.min(startIndex + itemsPerPage - 1, blockNumber);

			for (let i = startIndex; i <= endIndex; i++) {
				promises.push(
					fetch(jsonRpcUrl, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							jsonrpc: '2.0',
							method: 'eth_getBlockByNumber',
							params: [`0x${i.toString(16)}`, true],
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
					console.log('Block data for page', currentPage, ':', blockDataArray);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}, [blockNumber, currentPage]);

	const handlePageChange = (event, page) => {
		setCurrentPage(page);
	};

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
						item
						key={product.id}
						xs={12}
						sm={6}
						md={3}
					>
						<ProductCard product={product} />
					</Grid>
				))}
			</Grid>

			<Box
				sx={{
					mt: 3,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Typography variant='body2'>Page: {currentPage}</Typography>
				<Pagination
					count={Math.ceil(blockNumber / itemsPerPage)}
					page={currentPage}
					onChange={handlePageChange}
					color='primary'
					// boundaryCount={3}
					// siblingCount={2}
				/>
			</Box>
		</Container>
	);
}
