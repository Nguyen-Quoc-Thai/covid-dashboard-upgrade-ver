import React from 'react';
import styles from './styles.module.scss';

function Weather(props) {
	const { temperature, description, iconId, city, country } = props;

	return (
		<div className={styles.weather}>
			{!temperature ? (
				<div>Browser doesn't allow to access the location.</div>
			) : (
				<>
					<div className={styles.weather__left}>
						<img
							src={
								iconId
									? require(`./../../../resources/weather-icons/${iconId}.png`)
											.default
									: ''
							}
							alt='Home page'
							alt='Weather icon'
						/>
						<div>{description}</div>
					</div>
					<div className={styles.weather__right}>
						<div>{temperature}</div>
						<div>
							{city} - {country}
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default Weather;
