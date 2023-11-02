import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { Container, Unstable_Grid2 as Grid, Typography, Skeleton, useTheme } from '@mui/material';

import Iconify from 'src/components/iconify';
import { fShortenNumber } from 'src/utils/format-number';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
	const theme = useTheme();

	// state for number of peers
	const [noOfPeers, setNoOfPeers] = useState(null);

	// state for number of blocks
	const [noOfBlocks, setNoOfBlocks] = useState(null);

	// state of estimate gas fees
	const [estimateGasFees, setEstimateGasFees] = useState(null);

	// state of system status
	const [systemStatus, setSystemStatus] = useState(null);

	useEffect(() => {
		const jsonRpcUrl = 'https://9431-2405-204-2187-ee18-192f-98d4-5796-1dfc.ngrok-free.app/';

		// fetch for fetching number of peers
		fetch(jsonRpcUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				jsonrpc: '2.0',
				method: 'net_peerCount',
				params: [],
				id: 1
			})
		})
			.then(response => response.json())
			.then(data => {
				setNoOfPeers(data.result);
			})
			.catch(error => {
				console.log(error);
			});

		// fetch for fetching number of blocks
		fetch(jsonRpcUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				jsonrpc: '2.0',
				method: 'eth_blockNumber',
				params: [],
				id: 1
			})
		})
			.then(response => response.json())
			.then(data => {
				setNoOfBlocks(data.result);
			})
			.catch(error => {
				console.log(error);
			});

		// fetch for fetching estimated gas fees
		// !TODO: not working
		fetch(jsonRpcUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				jsonrpc: '2.0',
				method: 'eth_estimateGas',
				params: [],
				id: 1
			})
		})
			.then(response => response.json())
			.then(data => {
				setEstimateGasFees(data.result);
				console.log('this is estimate gas fees');
				console.log(data.result);
			})
			.catch(error => {
				console.log(error);
			});

		
		// fetch for fetching system status
		fetch(jsonRpcUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				jsonrpc: '2.0',
				method: 'eth_syncing',
				params: [],
				id: 1
			})
		})
			.then(response => response.json())
			.then(data => {
				setSystemStatus(data.result);

				console.log('system status', data.result);
			})
			.catch(error => {
				console.log(error);
			});
		
	}, []);

	return (
		<Container maxWidth='xl'>
			<Typography
				variant='h4'
				sx={{ mb: 5 }}
			>
				Hi, Welcome back 👋
			</Typography>

			<Grid
				container
				spacing={3}
			>
				<Grid
					xs={12}
					sm={6}
					md={3}
				>
					{noOfPeers === null ? (
						<>
							<Skeleton
								variant='rectangular'
								width='100%'
								height='100%'
								sx={{
									borderRadius: '13px'
								}}
							/>
						</>
					) : (
						<>
							<AppWidgetSummary
								title='No. of Peers'
								total={fShortenNumber(noOfPeers)}
								color='success'
								icon={
									<img
										alt='icon'
										src='/assets/icons/glass/ic_glass_users.png'
									/>
								}
							/>
						</>
					)}
				</Grid>

				<Grid
					xs={12}
					sm={6}
					md={3}
				>
					{noOfBlocks === null ? (
						<>
							<Skeleton
								variant='rectangular'
								width='100%'
								height='100%'
								sx={{
									borderRadius: '13px'
								}}
							/>
						</>
					) : (
						<>
							<AppWidgetSummary
								title='No. of Blocks'
								total={fShortenNumber(noOfBlocks)}
								color='info'
								icon={
									<img
										alt='icon'
										src='/assets/icons/glass/ic_glass_bag.png'
									/>
								}
							/>
						</>
					)}
				</Grid>

				<Grid
					xs={12}
					sm={6}
					md={3}
				>
					{estimateGasFees === null ? (
						<>
							<Skeleton
								variant='rectangular'
								width='100%'
								height='100%'
								sx={{
									borderRadius: '13px'
								}}
							/>
						</>
					) : (
						<>
							<AppWidgetSummary
								title='Estimated Gas Fees'
								total={fShortenNumber(estimateGasFees)}
								color='warning'
								icon={
									<img
										alt='icon'
										src='/assets/icons/glass/ic_glass_buy.png'
									/>
								}
							/>
						</>
					)}
				</Grid>

				<Grid
					xs={12}
					sm={6}
					md={3}
				>
					{systemStatus === null ? (
						<>
							<Skeleton
								variant='rectangular'
								width='100%'
								height='100%'
								sx={{
									borderRadius: '13px'
								}}
							/>
						</>
					) : (
						<>
							<AppWidgetSummary
								title='System Status'
								total={!systemStatus ? 'Synced' : 'Not Synced'}
								color={!systemStatus ? 'success' : 'error'}
								sx={{
									backgroundColor: !systemStatus
										? theme.palette.success.lighter
										: theme.palette.error.lighter
								}}
								icon={
									<img
										alt='icon'
										src='/assets/icons/glass/ic_glass_message.png'
									/>
								}
							/>
						</>
					)}
				</Grid>

				<Grid
					xs={12}
					md={6}
					lg={8}
				>
					<AppWebsiteVisits
						title='Website Visits'
						subheader='(+43%) than last year'
						chart={{
							labels: [
								'01/01/2003',
								'02/01/2003',
								'03/01/2003',
								'04/01/2003',
								'05/01/2003',
								'06/01/2003',
								'07/01/2003',
								'08/01/2003',
								'09/01/2003',
								'10/01/2003',
								'11/01/2003'
							],
							series: [
								{
									name: 'Team A',
									type: 'column',
									fill: 'solid',
									data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
								},
								{
									name: 'Team B',
									type: 'area',
									fill: 'gradient',
									data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
								},
								{
									name: 'Team C',
									type: 'line',
									fill: 'solid',
									data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
								}
							]
						}}
					/>
				</Grid>

				<Grid
					xs={12}
					md={6}
					lg={4}
				>
					<AppCurrentVisits
						title='Current Visits'
						chart={{
							series: [
								{ label: 'America', value: 4344 },
								{ label: 'Asia', value: 5435 },
								{ label: 'Europe', value: 1443 },
								{ label: 'Africa', value: 4443 }
							]
						}}
					/>
				</Grid>

				<Grid
					xs={12}
					md={6}
					lg={8}
				>
					<AppConversionRates
						title='Conversion Rates'
						subheader='(+43%) than last year'
						chart={{
							series: [
								{ label: 'Italy', value: 400 },
								{ label: 'Japan', value: 430 },
								{ label: 'China', value: 448 },
								{ label: 'Canada', value: 470 },
								{ label: 'France', value: 540 },
								{ label: 'Germany', value: 580 },
								{ label: 'South Korea', value: 690 },
								{ label: 'Netherlands', value: 1100 },
								{ label: 'United States', value: 1200 },
								{ label: 'United Kingdom', value: 1380 }
							]
						}}
					/>
				</Grid>

				<Grid
					xs={12}
					md={6}
					lg={4}
				>
					<AppCurrentSubject
						title='Current Subject'
						chart={{
							categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
							series: [
								{ name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
								{ name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
								{ name: 'Series 3', data: [44, 76, 78, 13, 43, 10] }
							]
						}}
					/>
				</Grid>

				<Grid
					xs={12}
					md={6}
					lg={8}
				>
					<AppNewsUpdate
						title='News Update'
						list={[...Array(5)].map((_, index) => ({
							id: faker.string.uuid(),
							title: faker.person.jobTitle(),
							description: faker.commerce.productDescription(),
							image: `/assets/images/covers/cover_${index + 1}.jpg`,
							postedAt: faker.date.recent()
						}))}
					/>
				</Grid>

				<Grid
					xs={12}
					md={6}
					lg={4}
				>
					<AppOrderTimeline
						title='Order Timeline'
						list={[...Array(5)].map((_, index) => ({
							id: faker.string.uuid(),
							title: [
								'1983, orders, $4220',
								'12 Invoices have been paid',
								'Order #37745 from September',
								'New order placed #XF-2356',
								'New order placed #XF-2346'
							][index],
							type: `order${index + 1}`,
							time: faker.date.past()
						}))}
					/>
				</Grid>

				<Grid
					xs={12}
					md={6}
					lg={4}
				>
					<AppTrafficBySite
						title='Traffic by Site'
						list={[
							{
								name: 'FaceBook',
								value: 323234,
								icon: (
									<Iconify
										icon='eva:facebook-fill'
										color='#1877F2'
										width={32}
									/>
								)
							},
							{
								name: 'Google',
								value: 341212,
								icon: (
									<Iconify
										icon='eva:google-fill'
										color='#DF3E30'
										width={32}
									/>
								)
							},
							{
								name: 'Linkedin',
								value: 411213,
								icon: (
									<Iconify
										icon='eva:linkedin-fill'
										color='#006097'
										width={32}
									/>
								)
							},
							{
								name: 'Twitter',
								value: 443232,
								icon: (
									<Iconify
										icon='eva:twitter-fill'
										color='#1C9CEA'
										width={32}
									/>
								)
							}
						]}
					/>
				</Grid>

				<Grid
					xs={12}
					md={6}
					lg={8}
				>
					<AppTasks
						title='Tasks'
						list={[
							{ id: '1', name: 'Create FireStone Logo' },
							{ id: '2', name: 'Add SCSS and JS files if required' },
							{ id: '3', name: 'Stakeholder Meeting' },
							{ id: '4', name: 'Scoping & Estimations' },
							{ id: '5', name: 'Sprint Showcase' }
						]}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}
