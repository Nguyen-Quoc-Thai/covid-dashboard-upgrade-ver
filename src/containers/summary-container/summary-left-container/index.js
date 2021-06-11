import React, { useState, useEffect } from 'react';
import Annotate from '../../../components/summary/annotate';
import ListCountry from '../../../components/summary/list';
import Weather from '../../../components/summary/weather';
import { getData } from './../../../apis';
import * as CONST_VAL from './../../../constants/math';
import _ from 'lodash';

const weatherDestructData = (data) => {
	const { KELVIN } = CONST_VAL;

	const temperature = Math.floor(data.main.temp - KELVIN);
	const { name: city } = data;
	const { country } = data.sys;

	let { description, icon: iconId } = data.weather[0];
	description = _.upperFirst(_.camelCase(description));

	return { temperature, description, iconId, city, country };
};

const countriesDestructData = (data) => {
	return data.map((ctr) => {
		const { updated, country, countryInfo } = ctr;
		const { population } = ctr;
		const {
			cases,
			todayCases,
			deaths,
			todayDeaths,
			recovered,
			todayRecovered,
		} = ctr;

		return {
			updated,
			country,
			countryInfo,
			population,
			data: {
				infections: {
					cases: cases,
					todayCases: todayCases,
				},
				deaths: {
					cases: deaths,
					todayCases: todayDeaths,
				},
				recovered: {
					cases: recovered,
					todayCases: todayRecovered,
				},
			},
		};
	});
};

function SummaryLeftContainer(props) {
	const [location, setLocation] = useState({});
	const [weather, setWeather] = useState({});
	const [countries, setCountries] = useState([]);

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

	// Get weather
	useEffect(async () => {
		const { API_KEY } = CONST_VAL;
		const { lat, long } = location;

		if (lat && long) {
			const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
			const { data } = await getData(apiUrl);
			data && setWeather(weatherDestructData(data));
		}
	}, [location]);

	// Get list countries
	useEffect(async () => {
		const apiUrl = 'https://corona.lmao.ninja/v2/countries?sort=cases';
		const { data } = await getData(apiUrl);
		data && setCountries(countriesDestructData(data));
	}, []);

	return (
		<>
			<Annotate {...props} />
			<ListCountry {...props} data={countries} />
			<Weather data={weather} />
		</>
	);
}

export default SummaryLeftContainer;
