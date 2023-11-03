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
			color={product.status === 'sale' ? 'error' : 'info'}
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

	const clipAddress = address => {
		if (!address) return '';
		if (address.length > 10) {
			const prefix = address.substring(0, 6);
			const suffix = address.slice(-4);
			return `${prefix}...${suffix}`;
		}
		return address;
	};

	return (
		<Card
			sx={{
				border: '1px solid',
				borderColor: product.status === 'sale' ? theme.palette.error.light : theme.palette.primary.light
			}}
		>
			{product.status && renderStatus}

			<Stack
				spacing={2}
				sx={{ p: 3 }}
			>
				<Stack variant='row'>
					<Typography>{/* block number */}[index]</Typography>
					<Link
						color='inherit'
						underline='hover'
						variant='subtitle2'
						noWrap
					>
						{/* hash value of the block */}
						{clipAddress('0x234vgwxwqq34bretWQ235HWRTY')}
					</Link>
				</Stack>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					Miner: {23}
					<Typography>Size: {23}</Typography>
				</Stack>
			</Stack>
		</Card>
	);
}

ShopProductCard.propTypes = {
	product: PropTypes.object
};
