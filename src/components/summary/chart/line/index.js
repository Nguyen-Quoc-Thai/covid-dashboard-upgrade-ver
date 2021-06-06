import React from 'react';
import HightCharts from 'highcharts';
import HightReactOfficial from 'highcharts-react-official';

const generateOptions = (data) => {
	const categories = [1, 2, 3, 4, 5];

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
				data: data.map((item) => item),
				legendIndex: 1,
				color: '#2eafdb',
			},
			{
				name: 'Deads',
				data: data.map((item) => item + 1),
				legendIndex: 2,
				color: '#fd5e5f',
			},
			{
				name: 'Recovered',
				data: data.map((item) => item + 2),
				legendIndex: 3,
				color: '#26c26c',
			},
		],
	};
};

function LineChart() {
	return (
		<>
			<HightReactOfficial
				hightCharts={HightCharts}
				options={generateOptions([1, 2, 3, 4, 9])}
			/>
		</>
	);
}

export default LineChart;
