import { Grid } from '@material-ui/core';
import React from 'react';
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

function CardContainer() {
	return <>{renderGroupCard(groupCard)}</>;
}

export default CardContainer;
