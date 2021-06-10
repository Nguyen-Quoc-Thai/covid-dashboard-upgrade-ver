import React from 'react';
import styles from './styles.module.scss';

function Country(props) {
	const { data: ctr } = props;
	const { country, countryInfo, data } = ctr;

	const { flag } = countryInfo;
	const { infections: ifc, deaths: det, recovered: rcv } = data;

	return (
		<div className={styles.country}>
			<div className={styles.country__left}>
				<img src={flag} alt='National flag' />
				<div>
					<h5>{country}</h5>
					<div>
						<span>{ifc.cases}</span>
						<span>{det.cases}</span>
						<span>{rcv.cases}</span>
					</div>
				</div>
			</div>
			<div className={styles.country__right}>
				<h5>Today</h5>
				<div>
					<span>{ifc.todayCases}</span>
					<span>{det.todayCases}</span>
					<span>{rcv.todayCases}</span>
				</div>
			</div>
		</div>
	);
}

export default Country;
