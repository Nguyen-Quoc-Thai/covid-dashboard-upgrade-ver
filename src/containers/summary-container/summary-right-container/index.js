import React, { useState, useEffect } from 'react';
import { getData } from '../../../apis';
import Chart from '../../../components/summary/chart';
import _ from 'lodash';

const sliceResult = (objData, timeOption) => {
	if (objData) {
		const keys = Object.keys(objData);
		return _.pick(objData, ...keys.slice(timeOption * -1).map((key) => key));
	}
};

function SummaryRightContainer(props) {
	const { selectedCountry, selectedOption } = props;
	const [timeOption, setTimeOption] = useState(0);
	const [mapOption, setMapOption] = useState('');
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
			setLineChartData(
				timeOption === 'All'
					? data.result
					: sliceResult(data.result, timeOption)
			);
		};

		fetchData();
	}, [apiUrl, timeOption]);

	useEffect(() => {
		switch (selectedOption) {
			case 'All':
			case 30:
			case 7: {
				setTimeOption(selectedOption);
				break;
			}
			default: {
				setMapOption(selectedOption);
			}
		}
	}, [selectedOption]);

	return (
		<>
			<Chart lineChartData={lineChartData} {...props} />
		</>
	);
}

export default SummaryRightContainer;
