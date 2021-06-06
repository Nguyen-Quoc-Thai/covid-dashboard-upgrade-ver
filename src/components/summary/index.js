import React from 'react';
import Chart from './chart';
import { Grid } from '@material-ui/core';
import ListCountry from './list';
import Annotate from './annotate';

function Summary(props) {
	return (
		<>
			<Grid item xs={8} sm={3} spacing={2}>
				<div>
					<Annotate {...props} />
				</div>
				<ListCountry />
			</Grid>
			<Grid item sm={9} xs={8} spacing={2}>
				<Chart />
			</Grid>
		</>
	);
}

export default Summary;
