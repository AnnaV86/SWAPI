import React, { createContext } from 'react';
import { IFilm, IHero, IPlanet } from '../models';

interface IContext {
	currentPeople: IHero[] | [];
	onClickVisited: (hero: IHero) => void;
	visitedHero: IHero[] | [];
	planets: IPlanet[] | [];
	films: IFilm[] | [];
}
export const Context = createContext<IContext>({
	currentPeople: [],
	onClickVisited: () => {},
	visitedHero: [],
	planets: [],
	films: []
});
