import React from 'react';
import styles from './styles.module.scss';

function Weather() {
	return (
		<div className={styles.weather}>
			<div className={styles.weather__left}>
				<img
					src='https://icons.iconarchive.com/icons/icons8/windows-8/512/Weather-Rain-icon.png'
					alt='Home page'
					alt='Weather icon'
				/>
				<div>Moderate Rain</div>
			</div>
			<div className={styles.weather__right}>
				<div>28OC</div>
				<div>Sa Dec - VN</div>
			</div>
		</div>
	);
}

export default Weather;
