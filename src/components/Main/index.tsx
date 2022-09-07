import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts/Context';
import { CardHero } from './CardHero';

import style from './main.module.scss';

export const Main: FC = () => {
	const { currentPeople, visitedHero } = useContext(Context);
	const [people, setPeople] = useState(currentPeople);
	const [visited, setVisited] = useState(false);

	const onChangePeople = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = evt.target;

		const searchList = currentPeople.filter(people =>
			people.name.toLowerCase().includes(value.toLowerCase())
		);
		setPeople(searchList);
	};

	const onClickVisitedFilter = () => {
		setVisited(true);
	};
	const onClickAllPeople = () => {
		setVisited(false);
	};

	useEffect(() => setPeople(currentPeople), [currentPeople]);

	return (
		<section className={style.main}>
			<input className={style.input} onChange={onChangePeople} />
			<button type="button" onClick={onClickVisitedFilter}>
				Просмотренные
			</button>
			<button type="button" onClick={onClickAllPeople}>
				Все
			</button>
			<ul className={style.list}>
				{visited
					? visitedHero.map(hero => (
							<CardHero hero={hero} key={hero.name} />
					  ))
					: people.map(hero => (
							<CardHero hero={hero} key={hero.name} />
					  ))}
			</ul>
		</section>
	);
};
