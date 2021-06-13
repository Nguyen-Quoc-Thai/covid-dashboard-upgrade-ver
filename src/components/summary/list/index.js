import React, { useState, useEffect } from 'react';
import Country from './item';
import styles from './styels.module.scss';
import Loading from './../../loading';

const renderListCountry = (listCountry, handleClickCountry) => {
	return listCountry.map((country, index) => (
		<Country
			key={index}
			data={country}
			handleClickCountry={handleClickCountry}
		/>
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
				<Loading />
			) : (
				renderListCountry(listCountry, handleClickCountry)
			)}
		</div>
	);
}

export default ListCountry;
