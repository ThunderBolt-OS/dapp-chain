import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Stack, Card, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { useParams } from 'react-router-dom';
import { JSON_RPC_URL } from 'src/constants';
import TransactionDetailCard from '../transaction-detail-card';

const ProductDetailView = () => {
	const { hash } = useParams();
	const [blockData, setBlockData] = useState({});
	const [transactionData, setTransactionData] = useState({});

	useEffect(() => {
		const jsonRpcUrl = JSON_RPC_URL;

		// Fetch the block data based on the hash
		fetch(jsonRpcUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				jsonrpc: '2.0',
				method: 'eth_getBlockByHash',
				params: [hash, true],
				id: 1
			})
		})
			.then(response => response.json())
			.then(data => {
				setBlockData(data);
			})
			.catch(error => {
				console.log(error);
			});
	}, [hash]);

	return blockData.result ? (
		<Container>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				mb={5}
			>
				<Typography variant='h4'>Block #{parseInt(blockData.result?.number, 16)}</Typography>
			</Stack>
			<Grid
				container
				spacing={3}
			>
				{blockData.result ? (
					<>
						<Grid
							item
							xs={12}
							md={6}
							sm={6}
							sx={{
								justifyContent: 'flex-end'
							}}
						>
							<Typography variant='h5'>Block Details</Typography>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell>Block Hash</TableCell>
										<TableCell>{blockData.result.hash}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Block Parent Hash</TableCell>
										<TableCell>{blockData.result.parentHash}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Time</TableCell>
										<TableCell>
											{new Date(parseInt(blockData.result.timestamp, 16)).toString()}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Nonce</TableCell>
										<TableCell>{blockData.result.nonce}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Difficulty</TableCell>
										<TableCell>{parseInt(blockData.result.difficulty, 16)}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Gas Limit</TableCell>
										<TableCell>{parseInt(blockData.result.gasLimit, 16)}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Total Difficulty</TableCell>
										<TableCell>{parseInt(blockData.result.totalDifficulty, 16)}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Grid>
					</>
				) : (
					<></>
				)}
				{JSON.stringify(blockData)}
				{blockData.result.transaction ? (
					<>
						<Grid
							item
							xs={12}
							md={6}
							sm={6}
						>
							<Typography
								variant='h5'
								align='end'
							>
								Transaction Details
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'flex-end'
								}}
							>
								<TransactionDetailCard />
							</Box>
						</Grid>
					</>
				) : (
					<></>
				)}
			</Grid>
		</Container>
	) : (
		<></>
	);
};

export default ProductDetailView;
