import React from 'react';
import Chart from './chart';
import { Grid } from '@material-ui/core';
import Annotate from './annotate';
import ListCountry from './list';
import Weather from './weather';

function Summary(props) {
	return (
		<>
			<Grid item xs={11} sm={3} spacing={2}>
				<Annotate {...props} />
				<ListCountry />
				<Weather />
			</Grid>
			<Grid item sm={9} xs={11} spacing={2}>
				<Chart />
			</Grid>
		</>
	);
}

export default Summary;
