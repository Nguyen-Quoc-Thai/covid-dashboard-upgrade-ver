import React from 'react';
import SelectOptions from './../../components/select';

const listOptionTime = [
	{
		key: 1,
		name: 'All',
		value: 999,
	},
	{
		key: 2,
		name: '30 days',
		value: 30,
	},
	{
		key: 3,
		name: '7 days',
		value: 7,
	},
];

const listOptionChart = [
	{
		key: 1,
		name: 'Line',
		value: 'line',
	},
	{
		key: 2,
		name: 'Map',
		value: 'map',
	},
];

function SelectOptionContainer() {
	return (
		<>
			<SelectOptions listOption={listOptionChart} />
			<SelectOptions listOption={listOptionTime} />
		</>
	);
}

export default SelectOptionContainer;
