import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

import ImageUpload from './image-upload';
import NFTFormFields from './nft-form-fields';
import { Box } from '@mui/material';

const CreateNFTForm = () => {
	return (
		<Box>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={6}
					md={6}
					sm={12}
				>
					<ImageUpload />
				</Grid>
				<Grid
					item
					xs={6}
					md={6}
					sm={12}
				>
					<NFTFormFields />
				</Grid>
			</Grid>
		</Box>
	);
};

export default CreateNFTForm;
