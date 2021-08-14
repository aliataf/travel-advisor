import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

console.log('s', process.env);

const options = {
	params: {
		bl_latitude: '11.847676',
		tr_latitude: '12.838442',
		bl_longitude: '109.095887',
		tr_longitude: '109.149359',
	},
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_TRAVEL_ADVISOR_RAPIDAPI_KEY,
		'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
	},
};

export const getPlacesData = async () => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, options);

        return data;
	} catch (error) {
        console.log(error);
    }
};
