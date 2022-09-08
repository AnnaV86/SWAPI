import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getPeopleFetch } from './api';
import { Hero, Main } from './components';
import { Context } from './contexts/Context';
import { IHero } from './models';

export const App = () => {
	const [currentPeople, setCurrentPeople] = useState<IHero[]>([]);
	const [visitedHeroes, setVisitedHeroes] = useState<IHero[]>([]);
	const [isFetching, setIsFetching] = useState(true);

	const onClickVisited = (hero: IHero) => {
		const isVisitedHero = visitedHeroes.some(el => el.name === hero.name);

		if (!isVisitedHero) {
			return setVisitedHeroes(prev => prev.concat(hero));
		}

		return;
	};

	useEffect(() => {
		(async () => {
			const response = await getPeopleFetch();
			setCurrentPeople(response.results);
			setIsFetching(false);
		})();
	}, []);

	return (
		<Context.Provider
			value={{
				currentPeople,
				onClickVisited,
				visitedHeroes,
				isFetching
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
