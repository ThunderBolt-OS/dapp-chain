import PropTypes from 'prop-types';
import { Box, Link, Card, Stack, Typography, Avatar, Chip, useTheme } from '@mui/material';

import { fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {
	const theme = useTheme();

	const renderStatus = (
		<Label
			variant='filled'
			color={(product.status === 'sale' && 'error') || 'info'}
			sx={{
				zIndex: 9,
				top: 16,
				right: 16,
				position: 'absolute',
				textTransform: 'uppercase'
			}}
		>
			{product.status}
		</Label>
	);

	const renderImg = (
		<Box
			component='img'
			alt={product.name}
			src={product.cover}
			sx={{
				top: 0,
				width: 1,
				height: 1,
				objectFit: 'cover',
				position: 'absolute'
			}}
		/>
	);

	const renderPrice = (
		<Typography variant='subtitle1'>
			<Typography
				component='span'
				variant='body1'
				sx={{
					color: 'text.disabled',
					textDecoration: 'line-through'
				}}
			>
				{product.priceSale && fCurrency(product.priceSale)}
			</Typography>
			&nbsp;
			{fCurrency(product.price)}
		</Typography>
	);

	return (
		<Card
			sx={{
				borderColor: theme.palette.primary.main
			}}
		>
			{/* <Box sx={{ pt: '100%', position: 'relative' }}>
				{product.status && renderStatus}

				{renderImg}
			</Box> */}

			<Stack
				spacing={2}
				sx={{ p: 3 }}
			>
				<Link
					color='inherit'
					underline='hover'
					variant='subtitle2'
					noWrap
				>
					{/* {product.name} */}

					0x234ger0
				</Link>

				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>

					{0.3201}
					<Chip
						avatar={
							<Avatar
								alt='Ethereum'
								src='/assets/ethereum.png'
							/>
						}
						label='ETH'
					/>
				</Stack>
			</Stack>
		</Card>
	);
}

ShopProductCard.propTypes = {
	product: PropTypes.object
};
