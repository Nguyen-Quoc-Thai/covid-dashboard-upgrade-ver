import { Grid, Container } from '@material-ui/core';
import React, { useState } from 'react';
import CardContainer from './../../containers/card-container';
import SelectOptionContainer from './../../containers/select-option-container';
import SummaryContainer from '../../containers/summary-container';
import { groupCard } from '../../constants/share';

function Home() {
	const [selectedCountry, setSelectedCountry] = useState({});
	const [selectedOption, setSelectedOption] = useState('');

	const handleClickCountry = (country) => {
		setSelectedCountry(country);
	};

	const handleChangeOption = (sltValue) => {
		setSelectedOption(sltValue);
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
				<SelectOptionContainer handleChangeOption={handleChangeOption} />
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
					selectedCountry={selectedCountry}
					selectedOption={selectedOption}
					handleClickCountry={handleClickCountry}
				/>
			</Grid>
		</Container>
	);
}

export default Home;
