import { Grid } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';

function Card(props) {
	const { name, color } = props;

	return (
		<>
			<Grid className={styles.card}>
				<h3 classNam={styles.card__title} style={{ color: `${color}` }}>
					{name}
				</h3>
				<h2>173711819</h2>
				<div className={styles.card__statistic}>
					<div>From:</div>
					<div>? percent</div>
				</div>
				<div
					className={styles.card__line}
					style={{ border: `2px solid ${color}` }}></div>
			</Grid>
		</>
	);
}

export default Card;
