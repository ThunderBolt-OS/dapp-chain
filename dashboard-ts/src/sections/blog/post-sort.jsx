import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

PostSort.propTypes = {
	options: PropTypes.array,
	onSort: PropTypes.func
};

export default function PostSort({ options, onSort }) {
	return (
		<TextField
			select
			size='small'
			value='latest'
			onChange={onSort}
		>
			{options.map(option => (
				<MenuItem
					key={option.value}
					value={option.value}
				>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
}
