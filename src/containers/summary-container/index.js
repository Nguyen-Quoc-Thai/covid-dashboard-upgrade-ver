import { Grid } from '@material-ui/core';
import React from 'react';
import SummaryLeftContainer from './summary-left-container';
import SummaryRightContainer from './summary-right-container';

function SummaryContainer(props) {
	return (
		<>
			<Grid item sm={3} xs={11} spacing={2}>
				<SummaryLeftContainer {...props} />
			</Grid>
			<Grid container item sm={9} xs={11} spacing={2}>
				<SummaryRightContainer />
			</Grid>
		</>
	);
}

export default SummaryContainer;
