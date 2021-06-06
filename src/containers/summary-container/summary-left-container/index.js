import React from 'react';
import Annotate from '../../../components/summary/annotate';
import ListCountry from '../../../components/summary/list';
import Weather from '../../../components/summary/weather';

function SummaryLeftContainer(props) {
	return (
		<>
			<Annotate {...props} />
			<ListCountry />
			<Weather />
		</>
	);
}

export default SummaryLeftContainer;
