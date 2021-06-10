import React, { useState, useEffect } from 'react';
import Annotate from '../../../components/summary/annotate';
import ListCountry from '../../../components/summary/list';
import Weather from '../../../components/summary/weather';
import { getData } from './../../../apis';
import * as CONST_VAL from './../../../constants/math';
import _ from 'lodash';

function SummaryLeftContainer(props) {
	const [location, setLocation] = useState({});
	const [weather, setWeather] = useState({});

	// Get lat, long
	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude;
				const long = position.coords.longitude;
				lat && long && setLocation({ lat, long });
			});
		}
	}, []);

	// Call API get weather
	useEffect(async () => {
		const { KELVIN, API_KEY } = CONST_VAL;
		const { lat, long } = location;

		if (lat && long) {
			const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
			const { data } = await getData(apiUrl);

			// Destruct data
			const temperature = Math.floor(data.main.temp - KELVIN);
			let { description, icon: iconId } = data.weather[0];
			const { name: city } = data;
			const { country } = data.sys;

			description = _.upperFirst(_.camelCase(description));

			// Set state
			setWeather({ temperature, description, iconId, city, country });
		}
	}, [location]);

	return (
		<>
			<Annotate {...props} />
			<ListCountry />
			<Weather data={weather} />
		</>
	);
}

export default SummaryLeftContainer;
