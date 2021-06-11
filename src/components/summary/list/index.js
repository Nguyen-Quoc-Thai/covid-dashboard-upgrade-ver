import React, { useState, useEffect } from 'react';
import Country from './item';
import styles from './styels.module.scss';
import Spinner from './../../loading';

const renderListCountry = (listCountry, handleClickCountry) => {
	return listCountry.map((country, index) => (
		<Country key={index} data={country} onClick={(e) => {}} />
	));
};

function ListCountry(props) {
	const { data: listCountry, handleClickCountry } = props;
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (listCountry && listCountry.length && loading) setLoading(false);
	}, [listCountry]);

	return (
		<div className={styles.list}>
			{loading ? (
				<Spinner />
			) : (
				renderListCountry(listCountry, handleClickCountry)
			)}
		</div>
	);
}

export default ListCountry;
