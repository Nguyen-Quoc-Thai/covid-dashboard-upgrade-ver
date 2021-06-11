import { Grid, Container } from '@material-ui/core';
import React from 'react';
import CardContainer from './../../containers/card-container';
import SelectOptionContainer from './../../containers/select-option-container';
import SummaryContainer from '../../containers/summary-container';
import { groupCard } from '../../constants/share';

const handleClickCountry = (country) => {
	console.log(country);
};

function Home() {
	return (
		<Container>
			<Grid
				sm={12}
				xs={11}
				container
				style={{ marginTop: '1rem' }}
				justify='center'
				spacing={2}>
				<CardContainer />
			</Grid>

			<Grid
				sm={12}
				xs={11}
				container
				style={{ marginTop: '1rem' }}
				justify='flex-end'
				spacing={2}>
				<SelectOptionContainer />
			</Grid>

			<Grid
				sm={12}
				xs={11}
				container
				style={{ marginTop: '1rem' }}
				justify='center'
				spacing={2}>
				<SummaryContainer
					xs={11}
					groupCard={groupCard}
					handleClickCountry={handleClickCountry}
				/>
			</Grid>
		</Container>
	);
}

export default Home;
