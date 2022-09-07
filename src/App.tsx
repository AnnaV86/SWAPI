import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getFilmsFetch, getPeopleFetch, getPlanetsFetch } from './api';
import { Hero, Main } from './components';
import { Context } from './contexts/Context';
import { IHero, IPlanet, IFilm } from './models';

export const App = () => {
	const [currentPeople, setCurrentPeople] = useState<IHero[]>([]);
	const [visitedHero, setVisitedHero] = useState<IHero[]>([]);
	const [planets, setPlanets] = useState<IPlanet[]>([]);
	const [films, setFilms] = useState<IFilm[]>([]);

	const onClickVisited = (hero: IHero) => {
		if (!visitedHero.some(el => el.name === hero.name)) {
			return setVisitedHero(prev => prev.concat(hero));
		}
		return;
	};

	useEffect(() => {
		(async () => {
			const response = await getPeopleFetch();
			setCurrentPeople(response.results);
			const responsePlanets = await getPlanetsFetch();
			setPlanets(responsePlanets.results);
			const responseFilms = await getFilmsFetch();
			setFilms(responseFilms.results);
		})();
	}, []);

	return (
		<Context.Provider
			value={{
				currentPeople: currentPeople,
				onClickVisited: onClickVisited,
				visitedHero: visitedHero,
				planets: planets,
				films: films
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/hero/:name" element={<Hero />} />
					<Route path="/" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</Context.Provider>
	);
};
