import React, { useState, useEffect } from 'react';
import HighCharts from 'highcharts';
import HighChartsReactOfficial from 'highcharts-react-official';
import Spinner from './../../../loading';

const generateOptions = (data) => {
	const categories = Object.keys(data);

	const infections = categories.map((day) => data[day].confirmed);
	const deaths = categories.map((day) => data[day].deaths);
	const recovered = categories.map((day) => data[day].recovered);

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
		legend: {
			title: {
				style: {
					color:
						(HighCharts.defaultOptions &&
							HighCharts.defaultOptions.legend &&
							HighCharts.defaultOptions.legend.title &&
							HighCharts.defaultOptions.legend.title.style &&
							HighCharts.defaultOptions.legend.title.style.color) ||
						'white',
				},
			},
		},
		xAxis: {
			categories: categories,
			crosshair: true,
			labels: {
				style: {
					color: 'white',
				},
			},
		},
		chart: {
			backgroundColor: '#303949',
			polar: true,
			type: 'line',
		},
		yAxis: {
			min: 0,
			title: {
				text: null,
			},
			labels: {
				align: 'right',
				style: {
					color: 'white',
				},
			},
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat:
				'<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y} ca</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true,
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
			},
		},
		series: [
			{
				name: 'Infections',
				data: infections,
				legendIndex: 1,
				color: '#2eafdb',
			},
			{
				name: 'Deads',
				data: deaths,
				legendIndex: 2,
				color: '#fd5e5f',
			},
			{
				name: 'Recovered',
				data: recovered,
				legendIndex: 3,
				color: '#26c26c',
			},
		],
	};
};

function LineChart(props) {
	const { lineChartData } = props;
	const [loading, setLoading] = useState(true);
	const [options, setOptions] = useState({});

	useEffect(() => {
		setOptions(generateOptions(lineChartData || {}));
	}, [lineChartData]);

	useEffect(() => {
		if (options?.series?.[0]?.data?.length && loading) {
			setLoading(false);
		}
	}, [options]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<HighChartsReactOfficial highCharts={HighCharts} options={options} />
			)}
		</>
	);
}

export default React.memo(LineChart);
