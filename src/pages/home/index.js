import { Grid, Container } from '@material-ui/core';
import React from 'react';
import Card from './../../components/card';
import Summary from './../../components/summary';
import SelectOptions from './../../components/select';

const groupCard = [
	{
		key: 1,
		name: 'INFECTIONS',
		color: '#2eafdb',
	},
	{
		key: 2,
		name: 'DEADS',
		color: '#fd5e5f',
	},
	{
		key: 3,
		name: 'RECOVERED',
		color: '#26c26c',
	},
];

const renderGroupCard = (groupCard) => {
	return groupCard.map((card) => {
		const { key, name, color } = card;
		return (
			<Grid key={key} item sm={4} xs={11}>
				<Card name={name} color={color} />
			</Grid>
		);
	});
};

const listOptionTime = [
	{
		key: 1,
		name: 'All',
		value: 999,
	},
	{
		key: 2,
		name: '30 days',
		value: 30,
	},
	{
		key: 3,
		name: '7 days',
		value: 7,
	},
];

const listOptionChart = [
	{
		key: 1,
		name: 'Line',
		value: 'line',
	},
	{
		key: 2,
		name: 'Map',
		value: 'map',
	},
];

function Home() {
	return (
		<Container>
			<Grid container justify='center' spacing={2}>
				{renderGroupCard(groupCard)}
			</Grid>

			<Grid
				sm={12}
				xs={11}
				container
				style={{ marginTop: '1rem' }}
				justify='flex-end'
				spacing={2}>
				<SelectOptions listOption={listOptionChart} />
				<SelectOptions listOption={listOptionTime} />
			</Grid>

			<Grid
				container
				justify='center'
				spacing={2}
				style={{ marginTop: '1rem' }}>
				<Summary xs={11} groupCard={groupCard} />
			</Grid>
		</Container>
	);
}

export default Home;
