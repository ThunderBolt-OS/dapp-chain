import React, { useState } from 'react';
import { Box, Button, Grid, Stack, TextField, InputAdornment, Typography, Chip, Avatar, useTheme } from '@mui/material';
import { useCreateNFT } from 'src/contexts/CreateNFTDataContext';

const NFTFormFields = () => {
	const theme = useTheme();
	const { nftFormData, updateNftFormData } = useCreateNFT();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');

	const handlePriceChange = e => {
		const newPrice = e.target.value;
		const numericValue = newPrice.replace(/[^0-9.]/g, '');
		setPrice(numericValue);
		updateNftFormData({ ...nftFormData, price: numericValue });
	};

	const handleSetTitle = e => {
		setTitle(e.target.value);
		updateNftFormData({ ...nftFormData, title: e.target.value });
	};

	const handleSetDescription = e => {
		setDescription(e.target.value);
		updateNftFormData({ ...nftFormData, description: e.target.value });
	};

	const handleReset = () => {
		setTitle('');
		setDescription('');
		setPrice('');
		updateNftFormData({
			base64Image: '',
			title: '',
			description: '',
			price: ''
		});
	};

	const handleSubmit = () => {
		// Handle form submission logic here
		console.log('Form submitted:', title, description, price);
		console.log('Form present in context:', nftFormData);
	};

	return (
		<Box>
			<Stack spacing={2}>
				<TextField
					label='Title'
					fullWidth
					value={title}
					onChange={handleSetTitle}
				/>
				<TextField
					label='Description'
					fullWidth
					multiline
					rows={4}
					value={description}
					onChange={handleSetDescription}
				/>
				<TextField
					label='Price'
					fullWidth
					type='text'
					value={price}
					onChange={handlePriceChange}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<Chip
									avatar={
										<Avatar
											alt='Ethereum'
											src='/assets/ethereum.png'
										/>
									}
									label='ETH'
									// color={`${price === '' ? 'default' : 'primary'}`}
								/>
							</InputAdornment>
						)
					}}
				/>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={2}
					justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}
				>
					<Button
						variant='contained'
						color='warning'
						onClick={handleReset}
						sx={{ width: 100 }}
					>
						Reset
					</Button>
					<Button
						variant='contained'
						color='success'
						onClick={handleSubmit}
						sx={{ width: 100 }}
					>
						Mint
					</Button>
				</Stack>
			</Stack>
		</Box>
	);
};

export default NFTFormFields;
