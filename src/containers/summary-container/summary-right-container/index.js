import React, { useState, useEffect } from 'react';
import { getData } from '../../../apis';
import Chart from '../../../components/summary/chart';

function SummaryRightContainer(props) {
	const { selectedCountry } = props;
	const [lineChartData, setLineChartData] = useState([]);
	const [apiUrl, setApiUrl] = useState('');

	useEffect(() => {
		if (Object.keys(selectedCountry).length) {
			setApiUrl(
				`https://covidapi.info/api/v1/country/${selectedCountry.countryInfo.iso3}`
			);
		} else {
			setApiUrl('https://covidapi.info/api/v1/global/count');
		}
	}, [selectedCountry]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getData(apiUrl);
			setLineChartData(data.result);
		};

		fetchData();
	}, [apiUrl]);

	return (
		<>
			<Chart lineChartData={lineChartData} {...props} />
		</>
	);
}

export default SummaryRightContainer;
