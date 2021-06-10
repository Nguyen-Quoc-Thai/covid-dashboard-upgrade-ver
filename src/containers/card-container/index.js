import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { getData } from '../../apis';
import Card from './../../components/card';
import { groupCard } from './../../constants/share';

const destructData = (globalData) => {
	return {
		infections: {
			cases: globalData.cases,
			todayCases: globalData.todayCases,
		},
		deaths: {
			cases: globalData.deaths,
			todayCases: globalData.todayDeaths,
		},
		recovered: {
			cases: globalData.recovered,
			todayCases: globalData.todayRecovered,
		},
	};
};

function CardContainer() {
	const [globalData, setGlobalData] = useState({});
	const [infections, deads, recovered] = groupCard;

	useEffect(async () => {
		const apiUrl = 'https://corona.lmao.ninja/v2/all';
		const { data } = await getData(apiUrl);
		setGlobalData(destructData(data));
	}, []);

	return (
		<>
			<Grid key={1} item sm={4} xs={11}>
				<Card
					name={infections.name}
					color={infections.color}
					data={globalData.infections || {}}
				/>
			</Grid>
			<Grid key={2} item sm={4} xs={11}>
				<Card
					name={deads.name}
					color={deads.color}
					data={globalData.deaths || {}}
				/>
			</Grid>
			<Grid key={3} item sm={4} xs={11}>
				<Card
					name={recovered.name}
					color={recovered.color}
					data={globalData.recovered || {}}
				/>
			</Grid>
		</>
	);
}

export default CardContainer;
