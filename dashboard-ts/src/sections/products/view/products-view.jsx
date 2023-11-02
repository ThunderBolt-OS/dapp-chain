import { useState } from 'react';

import { Stack, Container, Unstable_Grid2 as Grid, Typography, Button } from '@mui/material';
import Iconify from 'src/components/iconify';
import { useRouter } from 'src/routes/hooks';

import { products } from 'src/_mock/products';

import ProductCard from '../product-card';

// ----------------------------------------------------------------------

export default function ProductsView() {
	const [openFilter, setOpenFilter] = useState(false);
	const router = useRouter();

	const handleOpenFilter = () => {
		setOpenFilter(true);
	};

	const handleCloseFilter = () => {
		setOpenFilter(false);
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
