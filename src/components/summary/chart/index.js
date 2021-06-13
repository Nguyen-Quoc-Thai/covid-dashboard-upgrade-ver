import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import LineChart from './line';
import Map from './map';

function Chart(props) {
	const { selectedCountry } = props;
	const [mapData, setMapData] = useState({});
	const [mapUrl, setMapUrl] = useState('');
	console.log({ mapUrl });
	useEffect(() => {
		if (Object.keys(selectedCountry).length) {
			setMapUrl(
				`@highcharts/map-collection/countries/${selectedCountry.countryInfo.iso2.toLowerCase()}/${selectedCountry.countryInfo.iso2.toLowerCase()}-all.geo.json`
			);
		} else {
			setMapUrl('@highcharts/map-collection/custom/world.geo.json');
		}
	}, [selectedCountry]);

	useEffect(() => {
		mapUrl &&
			import(mapUrl)
				.then((res) => setMapData(res))
				.catch((error) => console.log(error));
	}, [mapUrl]);

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
