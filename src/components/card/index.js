import { Grid } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import CountUp from 'react-countup';

function Card(props) {
	const {
		name,
		color,
		data: { cases, todayCases },
	} = props;

	return (
		<>
			<Grid className={styles.card}>
				<h3 classNam={styles.card__title} style={{ color: `${color}` }}>
					{name}
				</h3>
				<h2>
					<CountUp end={cases || 0} duration={2} separator=' ' />
				</h2>
				<div className={styles.card__statistic}>
					<div>Today: {todayCases} cases</div>
					<div> population</div>
				</div>
				<div
					className={styles.card__line}
					style={{ border: `2px solid ${color}` }}></div>
			</Grid>
		</>
	);
}

export default Card;
