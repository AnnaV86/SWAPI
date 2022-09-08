import React, { FC, useContext } from 'react';
import { Context } from '../../../contexts/Context';
import { IHero } from '../../../models';
import { CardHero } from './components/CardHero';

interface IList {
	isVisited: boolean;
	people: IHero[];
}
export const List: FC<IList> = ({ isVisited, people }) => {
	const { visitedHeroes } = useContext(Context);

	return (
		<ul>
			{isVisited
				? visitedHeroes.map(hero => (
						<CardHero hero={hero} key={hero.name} />
				  ))
				: people.map(hero => <CardHero hero={hero} key={hero.name} />)}
		</ul>
	);
};
