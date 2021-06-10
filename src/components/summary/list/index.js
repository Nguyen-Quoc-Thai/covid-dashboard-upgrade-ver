import React from 'react';
import Country from './item';
import styles from './styels.module.scss';

const renderListCountry = (listCountry) => {
	return listCountry.map((country, index) => (
		<Country key={index} data={country} />
	));
};

function ListCountry(props) {
	const { data: listCountry } = props;

	return <div className={styles.list}>{renderListCountry(listCountry)}</div>;
}

export default ListCountry;
