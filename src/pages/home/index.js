import { Grid, Container } from '@material-ui/core';
import React from 'react';
import Card from './../../components/card';
import Summary from './../../components/summary';

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
			<Grid key={key} item sm={4} xs={8}>
				<Card name={name} color={color} />
			</Grid>
		);
	});
};

function Home() {
	return (
		<Container>
			<Grid container justify='center' spacing={2}>
				{renderGroupCard(groupCard)}
			</Grid>

			<Grid
				container
				justify='center'
				spacing={2}
				style={{ marginTop: '1rem' }}>
				<Summary groupCard={groupCard} />
			</Grid>
		</Container>
	);
}

export default Home;
