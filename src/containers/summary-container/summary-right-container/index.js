import React, { useState, useEffect } from 'react';
import { getData } from '../../../apis';
import Chart from '../../../components/summary/chart';

function SummaryRightContainer() {
	const [lineChartData, setLineChartData] = useState([]);

	useEffect(async () => {
		const apiUrl = 'https://covidapi.info/api/v1/global/count';
		const { data } = await getData(apiUrl);
		setLineChartData(data.result);
	}, []);

	return (
		<>
			<Chart lineChartData={lineChartData} />
		</>
	);
}

export default SummaryRightContainer;
