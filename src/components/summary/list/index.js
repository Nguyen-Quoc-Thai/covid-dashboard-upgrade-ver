import React from 'react';
import Country from './item';
import styles from './styels.module.scss';

function ListCountry() {
	return (
		<div className={styles.list}>
			<Country />
			<Country />
			<Country />
			<Country />
			<Country />
			<Country />
			<Country />
			<Country />
			<Country />
			<Country />
		</div>
	);
}

export default ListCountry;
