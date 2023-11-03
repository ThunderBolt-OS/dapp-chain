import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { JSON_RPC_URL } from 'src/constants';

const ProductDetailView = () => {
  const { hash } = useParams();
  const [blockData, setBlockData] = useState({});

	useEffect(() => {
		const jsonRpcUrl = JSON_RPC_URL;

		// fetch the fetching the block data based on the id (block number)
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
				console.log(`data for block ${hash}: `, data);
				setBlockData(data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<Box>
      {'hello from product detail view'} {hash}
      {JSON.stringify(blockData, null, 2)}
		</Box>
	);
};

export default ProductDetailView;
