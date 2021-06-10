import Axios from 'axios';

export const getData = async (apiUrl) => {
	return await Axios.get(apiUrl);
};
