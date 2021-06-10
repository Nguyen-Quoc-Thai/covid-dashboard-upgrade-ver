import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { getData } from '../../apis';
import Card from './../../components/card';
import { groupCard } from './../../constants/share';

const renderGroupCard = (groupCard) => {
	return groupCard.map((card) => {
		const { key, name, color } = card;
		return (
			<Grid key={key} item sm={4} xs={11}>
				<Card name={name} color={color} />
			</Grid>
		);
	});
};

const destructData = (data) =>
	({
		updated,
		cases,
		todayCases,
		deaths,
		todayDeaths,
		recovered,
		todayRecovered,
		population,
		affectedCountries,
	} = data);

function CardContainer() {
	const [globalData, setGlobalData] = useState({});
	console.log({ globalData });
	useEffect(async () => {
		const apiUrl = 'https://corona.lmao.ninja/v2/all';
		const { data } = await getData(apiUrl);
		setGlobalData(data);

		// Destruct data
		setGlobalData(destructData(data));
	}, []);

	return <>{renderGroupCard(groupCard)}</>;
}

export default CardContainer;
