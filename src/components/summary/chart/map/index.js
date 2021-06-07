import React, { useState, useEffect } from 'react';
import HightCharts from 'highcharts';
import HightChartsReactOfficial from 'highcharts-react-official';
import HightChartsMap from 'highcharts/modules/map';

HightChartsMap(HightCharts);

const generateOptions = (mapData) => {
	return {
		chart: {
			height: 400,
		},
		title: {
			text: 'Infections',
			style: {
				color: 'white',
			},
		},
		mapNavigation: {
			enabled: true,
		},
		colorAxis: {
			min: 0,
			stops: [
				[0, 2, 'gray'],
				[2, 4, 'red'],
				[4, 6, 'green'],
				[6, 8, 'yellow'],
			],
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'bottom',
		},
		series: [
			{
				mapData: { ...mapData },
				name: 'Population',
				joinBy: ['hc-key', 'key'],
			},
		],
	};
};

const destructData = (mapData) => {
	return mapData.features.map((feature, index) => ({
		key: feature.properties['hc-key'],
		value: index,
	}));
};

function Map(props) {
	const [options, setOptions] = useState({});
	const mapRef = useRef(null);
	const { mapData } = props;

	useEffect(() => {
		if (mapData) {
			const data = destructData(mapData);
			setOptions(data);
		}
	}, []);

	useEffect(() => {
		if (mapRef && mapRef.current) {
			mapRef.current.chart.series[0].update({
				mapData,
			});
		}
	}, []);

	return (
		<>
			<HightChartsReactOfficial
				hightCharts={HightCharts}
				options={generateOptions(options)}
				constructorType='mapChart'
				ref={mapRef}
			/>
		</>
	);
}

export default Map;
