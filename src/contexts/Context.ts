import React, { createContext } from 'react';
import { IHero } from '../models';

interface IContext {
	currentPeople: IHero[] | [];
	onClickVisited: (hero: IHero) => void;
	visitedHeroes: IHero[] | [];
	isFetching: boolean;
}
export const Context = createContext<IContext>({
	currentPeople: [],
	onClickVisited: () => {},
	visitedHeroes: [],
	isFetching: true
});
