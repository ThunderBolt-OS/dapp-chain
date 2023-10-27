import React from 'react';
import { Box, Container, Stack, Typography, Button } from '@mui/material';
import Iconify from 'src/components/iconify';

import { useRouter } from 'src/routes/hooks';
import { useSetUser } from 'src/contexts/SellerOrBuyerContext';

const MintNFTView = () => {
	const { sellerOrBuyer, updateSellerOrBuyer } = useSetUser();
	const router = useRouter();

	const handleOnClickSeller = () => {
		updateSellerOrBuyer({ isSeller: true });
		router.push('/');
	};

	const handleOnClickBuyer = () => {
		updateSellerOrBuyer({ isSeller: false });
		router.push('/');
	};

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}
		>
			<Box>
				<Typography
					variant='h4'
					align='center'
					sx={{
						fontWeight: 'bold',
						mb: 3
					}}
				>
					Are you Seller or Buyer?
				</Typography>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-evenly'
				>
					<Button
						variant='contained'
						color='inherit'
						onClick={handleOnClickBuyer}
					>
						Buyer
					</Button>
					<Button
						variant='contained'
						color='inherit'
						onClick={handleOnClickSeller}
					>
						Seller
					</Button>
				</Stack>
			</Box>
		</Container>
	);
};

export default MintNFTView;
