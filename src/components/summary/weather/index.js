import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { getWeather } from './../../../apis/weather';
import * as CONST_VAL from './../../../constants/math';

function Weather() {
	const [location, setLocation] = useState({});
	const [weather, setWeather] = useState({});

	useEffect(() => {
		const isGeolocationAllowed = () => {
			if ('geolocation' in navigator) {
				navigator.geolocation.getCurrentPosition((position) => {
					const lat = position.coords.latitude;
					const long = position.coords.longitude;

					return { lat, long };
				});
			}
		};

		const data = isGeolocationAllowed();
		if (data) {
			const { lat, long } = data;
			lat && long && setLocation({ lat, long });
		}
	}, []);

	useEffect(() => {
		const { KELVIN, API_KEY } = CONST_VAL;
		const { lat, long } = location;

		if (lat && long) {
			const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
			const data = getWeather(apiUrl);

			// Destruct data
			const temperature = Math.floor(data.main.temp - KELVIN);
			const { description, icon: iconId } = data.weather[0];
			const { name: city } = data.name;
			const { country } = data.sys;

			setWeather({ temperature, description, iconId, city, country });
		}
	}, [location]);

	const { temperature, description, iconId, city, country } = weather;

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
