import { IPeople } from '../models';

export const getPeopleFetch = async (): Promise<IPeople> => {
	const response = await fetch('https://swapi.dev/api/people');

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};
