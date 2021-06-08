import React, { useState, useEffect, useRef } from 'react';
import HightCharts from 'highcharts';
import HightChartsReactOfficial from 'highcharts-react-official';
import HightChartsMap from 'highcharts/modules/map';

HightChartsMap(HightCharts);

const destructData = (mapData) => {
	return mapData.features.map((feature, index) => {
		return {
			key: feature.properties['hc-key'],
			value: index,
		};
	});
};

const initOptions = {
	chart: {
		height: '400',
	},
	title: {
		text: null,
		style: {
			color: 'white',
		},
	},
	chart: {
		backgroundColor: '#303949',
	},
	mapNavigation: {
		enabled: true,
	},
	colorAxis: {
		min: 0,
		stops: [
			[0.2, '#FFC4AA'],
			[0.4, '#FF8A66'],
			[0.6, '#FF392B'],
			[0.8, '#B71525'],
			[1, '	#7A0826'],
		],
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'bottom',
	},
	series: [
		{
			name: 'Population',
			joinBy: ['hc-key', 'key'],
		},
	],
	yAxis: {
		labels: {
			style: {
				color: 'white',
				cursor: 'pointer',
			},
		},
	},
};

function Map(props) {
	const { mapData } = props;
	const [options, setOptions] = useState({});
	const [mapLoaded, setMapLoaded] = useState(false);
	const mapRef = useRef(null);

	useEffect(() => {
		if (mapData && Object.keys(mapData).length) {
			console.log({ mapData });
			const data = destructData(mapData);

			setOptions(() => ({
				...initOptions,
				title: {
					text: mapData.title,
					style: {
						color: 'white',
					},
				},
				series: [
					{
						...initOptions.series[0],
						mapData,
						data,
					},
				],
			}));

			if (!mapLoaded) setMapLoaded(true);
		}
	}, [mapData, mapLoaded]);

	useEffect(() => {
		if (mapRef && mapRef.current) {
			mapRef.current.chart.series[0].update({
				mapData,
			});
		}
	}, [options, mapData]);

	if (!mapLoaded) return null;

	return (
		<>
			<HightChartsReactOfficial
				hightCharts={HightCharts}
				options={options}
				constructorType='mapChart'
				ref={mapRef}
			/>
		</>
	);
}

export default React.memo(Map);
