import {
	IFilms,
	IPeople,
	IPlanets,
	ISpecies,
	IStarships,
	IVehicles
} from '../models';

export const getPeopleFetch = async (): Promise<IPeople> => {
	const response = await fetch('https://swapi.dev/api/people');

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};

export const getPlanetsFetch = async (): Promise<IPlanets> => {
	const response = await fetch('https://swapi.dev/api/planets');

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};

export const getFilmsFetch = async (): Promise<IFilms> => {
	const response = await fetch('https://swapi.dev/api/films');

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};

export const getSpeciesFetch = async (): Promise<ISpecies> => {
	const response = await fetch('https://swapi.dev/api/species');

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};

export const getVehiclesFetch = async (): Promise<IVehicles> => {
	const response = await fetch('https://swapi.dev/api/vehicles');

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};

export const getStarshipsFetch = async (): Promise<IStarships> => {
	const response = await fetch('https://swapi.dev/api/starships');

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};
