import PropTypes from 'prop-types';
import { Card, Typography, CardHeader } from '@mui/material';
import {
	Timeline,
	TimelineDot,
	TimelineContent,
	TimelineSeparator,
	TimelineConnector,
	TimelineItem,
	timelineItemClasses
} from '@mui/lab';
import { fDateTime } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export default function AnalyticsOrderTimeline({ title, subheader, list, ...other }) {
	return (
		<Card {...other}>
			<CardHeader
				title={title}
				subheader={subheader}
			/>

			<Timeline
				sx={{
					m: 0,
					p: 3,
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0
					}
				}}
			>
				{list.map((item, index) => (
					<OrderItem
						key={item.id}
						item={item}
						lastTimeline={index === list.length - 1}
					/>
				))}
			</Timeline>
		</Card>
	);
}

AnalyticsOrderTimeline.propTypes = {
	list: PropTypes.array,
	subheader: PropTypes.string,
	title: PropTypes.string
};

// ----------------------------------------------------------------------

function OrderItem({ item, lastTimeline }) {
	const { type, title, time } = item;
	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot
					color={
						(type === 'order1' && 'primary') ||
						(type === 'order2' && 'success') ||
						(type === 'order3' && 'info') ||
						(type === 'order4' && 'warning') ||
						'error'
					}
				/>
				{lastTimeline ? null : <TimelineConnector />}
			</TimelineSeparator>

			<TimelineContent>
				<Typography variant='subtitle2'>{title}</Typography>

				<Typography
					variant='caption'
					sx={{ color: 'text.disabled' }}
				>
					{fDateTime(time)}
				</Typography>
			</TimelineContent>
		</TimelineItem>
	);
}

OrderItem.propTypes = {
	item: PropTypes.object,
	lastTimeline: PropTypes.bool
};
