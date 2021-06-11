import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import SummaryLeftContainer from './summary-left-container';
import SummaryRightContainer from './summary-right-container';

function SummaryContainer(props) {
	const [countriesData, setCountriesData] = useState([]);

	const getListCountriesSuccess = (data) => {
		setCountriesData(data);
	};

	return (
		<>
			<Grid item sm={3} xs={11} spacing={2}>
				<SummaryLeftContainer
					getListCountriesSuccess={getListCountriesSuccess}
					{...props}
				/>
			</Grid>
			<Grid container item sm={9} xs={11} spacing={2}>
				<SummaryRightContainer countriesData={countriesData} {...props} />
			</Grid>
		</>
	);
}

export default SummaryContainer;
