import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import LineChart from './line';
import Map from './map';

function Chart(props) {
	const { lineChartData, selectedCountry, selectedOption } = props;
	const [mapData, setMapData] = useState({});
	const [mapOption, setMapOption] = useState('line-map');

	const renderGrid = () => {
		switch (mapOption) {
			case 'line-map': {
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
			case 'line': {
				return (
					<>
						<Grid item xs={11} sm={12}>
							<LineChart lineChartData={lineChartData} {...props} />
						</Grid>
					</>
				);
			}
			case 'map': {
				return (
					<>
						<Grid item xs={11} sm={12}>
							<Map mapData={mapData} {...props} />
						</Grid>
					</>
				);
			}
			default: {
			}
		}
	};

	useEffect(() => {
		switch (selectedOption) {
			case 'line-map':
			case 'line':
			case 'map': {
				setMapOption(selectedOption);
				break;
			}
			default: {
			}
		}
	}, [selectedOption]);

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

	return <>{renderGrid()}</>;
}

export default Chart;
