import React, { useEffect } from 'react';
import LineChart from './line';
import Map from './map';

function Chart() {
	const [mapData, setMapData] = useState({});

	useEffect(() => {
		import('@highcharts/map-collection/countries/vi-all.geo.json').then((res) =>
			setMapData(res)
		);
	}, []);

	return <Map mapData={mapData} />;
}
export default Chart;
