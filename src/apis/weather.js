import Axios from 'axios';

export const getWeather = async (apiUrl) => {
	Axios.get(apiUrl)
		.then((res) => {
			const { data } = res;
			return data;
		})
		.catch((error) => {
			console.log(error);
		});
};
