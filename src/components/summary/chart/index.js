import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import LineChart from './line';
import Map from './map';

function Chart(props) {
	const { selectedCountry, selectedOption } = props;
	const [mapData, setMapData] = useState({});

	const renderGrid = () => {};
	useEffect(() => {
		if (Object.keys(selectedCountry).length) {
			import(
				`@highcharts/map-collection/countries/${selectedCountry.countryInfo.iso2.toLowerCase()}/${selectedCountry.countryInfo.iso2.toLowerCase()}-all.geo.json`
			)
				.then((res) => setMapData(res))
				.catch((error) => console.log(error));
		} else {
			import('@highcharts/map-collection/custom/world.geo.json')
				.then((res) => setMapData(res))
				.catch((error) => console.log(error));
		}
	}, [selectedCountry]);

	return (
		<>
			<Grid item xs={11} sm={8}>
				<LineChart {...props} />
			</Grid>
			<Grid item xs={11} sm={4}>
				<Map mapData={mapData} {...props} />
			</Grid>
		</>
	);
}

export default Chart;
