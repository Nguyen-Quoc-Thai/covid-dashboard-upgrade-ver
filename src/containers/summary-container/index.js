import { Grid } from '@material-ui/core';
import React from 'react';
import SummaryLeftContainer from './summary-left-container';
import SummaryRightContainer from './summary-right-container';
import { groupCard } from './../../constants/share';

function SummaryContainer() {
	return (
		<>
			<Grid item sm={3} xs={11} spacing={2}>
				<SummaryLeftContainer groupCard={groupCard} />
			</Grid>
			<Grid container item sm={9} xs={11} spacing={2}>
				<SummaryRightContainer />
			</Grid>
		</>
	);
}

export default SummaryContainer;
