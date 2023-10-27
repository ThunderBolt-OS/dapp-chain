import { useState } from 'react';

import { Stack, Container, Unstable_Grid2 as Grid, Typography, Button } from '@mui/material';
import Iconify from 'src/components/iconify';
import { useRouter } from 'src/routes/hooks';

import { products } from 'src/_mock/products';

import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';

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

	const handleOnClickAddProduct = () => {
		router.push('/create-nft');
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

				<Button
					variant='contained'
					color='inherit'
					startIcon={<Iconify icon='eva:plus-fill' />}
					onClick={handleOnClickAddProduct}
				>
					Add Product
				</Button>
			</Stack>

			<Stack
				direction='row'
				alignItems='center'
				flexWrap='wrap-reverse'
				justifyContent='flex-end'
				sx={{ mb: 5 }}
			>
				<Stack
					direction='row'
					spacing={1}
					flexShrink={0}
					sx={{ my: 1 }}
				>
					<ProductFilters
						openFilter={openFilter}
						onOpenFilter={handleOpenFilter}
						onCloseFilter={handleCloseFilter}
					/>

					<ProductSort />
				</Stack>
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

			<ProductCartWidget />
		</Container>
	);
}
