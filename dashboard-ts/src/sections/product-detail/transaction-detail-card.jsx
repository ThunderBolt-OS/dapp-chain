import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TransactionDetailCard() {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Card sx={{ width: '90%' }}>
			<CardContent>
				<Typography variant='h6'>Transaction Index</Typography>
				<Typography
					variant='subtitle2'
					color='textSecondary'
				>
					Timestamp
				</Typography>
				<hr /> {/* Add a horizontal line to separate content */}
				<Typography
					variant='body2'
					color='textSecondary'
				>
					HASH
				</Typography>
				<Typography variant='body1'>From</Typography>
				<Typography
					variant='body2'
					color='textSecondary'
				>
					Sender's address Hash
				</Typography>
				<Typography
					variant='body1'
					sx={{ mt: 2 }}
				>
					To
				</Typography>
				<Typography
					variant='body2'
					color='textSecondary'
				>
					Receiver's address Hash
				</Typography>
				<Typography
					variant='body2'
					color='textSecondary'
				>
					Value:
				</Typography>
				<Typography variant='body1'>Sender's address Hash</Typography>
				<hr /> {/* Add a horizontal line to separate content */}
				{isExpanded && (
					<>
						<Typography variant='body1'>From</Typography>
						<Typography
							variant='body2'
							color='textSecondary'
						>
							Gas Price: 2345
						</Typography>

						<Typography
							variant='body1'
							sx={{ mt: 2 }}
						>
							Value: 2345
						</Typography>
						<Typography
							variant='body2'
							color='textSecondary'
						>
							Input: 2345
						</Typography>
					</>
				)}
				<IconButton
					aria-label='expand more'
					onClick={handleExpandClick}
					sx={{
						marginLeft: 'auto',
						transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
						transition: 'transform 0.2s'
					}}
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardContent>
		</Card>
	);
}
