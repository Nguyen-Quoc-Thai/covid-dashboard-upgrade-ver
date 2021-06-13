import { Grid, Container } from '@material-ui/core';
import React, { useState } from 'react';
import CardContainer from './../../containers/card-container';
import SelectOptionContainer from './../../containers/select-option-container';
import SummaryContainer from '../../containers/summary-container';
import { groupCard } from '../../constants/share';

function Home() {
	const [selectedCountry, setSelectedCountry] = useState({});

	const handleClickCountry = (country) => {
		setSelectedCountry(country);
	};

	return (
		<Container>
			<Grid
				sm={12}
				xs={11}
				container
				style={{ marginTop: '1rem' }}
				justify='center'
				spacing={2}>
				<CardContainer selectedCountry={selectedCountry} />
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
					selectedCountry={selectedCountry}
				/>
			</Grid>
		</Container>
	);
}

export default Home;
