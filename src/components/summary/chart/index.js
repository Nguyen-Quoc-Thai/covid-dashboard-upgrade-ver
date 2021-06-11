import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import LineChart from './line';
import Map from './map';

function Chart() {
	const [mapData, setMapData] = useState({});

	useEffect(() => {
		import('@highcharts/map-collection/countries/vn/vn-all.geo.json')
			.then((res) => setMapData(res))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<Grid item xs={11} sm={8}>
				<LineChart />
			</Grid>
			<Grid item xs={11} sm={4}>
				<Map mapData={mapData} />
			</Grid>
		</>
	);
}

export default Chart;
