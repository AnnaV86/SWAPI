import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts/Context';
import style from './main.module.scss';
import { Search } from './Search';
import { List } from './List';
import { Preloader } from '../Commons';

export const Main: FC = () => {
	const { currentPeople, isFetching } = useContext(Context);
	const [people, setPeople] = useState(currentPeople);
	const [isVisited, setIsVisited] = useState(false);

	const onChangePeople = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = evt.target;

		const searchList = currentPeople.filter(people =>
			people.name.toLowerCase().includes(value.toLowerCase())
		);

		setPeople(searchList);
	};

	const onClickVisitedFilter = () => {
		setIsVisited(true);
	};
	const onClickAllPeople = () => {
		setIsVisited(false);
	};

	useEffect(() => setPeople(currentPeople), [currentPeople]);

	return (
		<section className={style.main}>
			<h1 className={style.title}>Star Wars</h1>
			<Search
				onChangePeople={onChangePeople}
				onClickVisitedFilter={onClickVisitedFilter}
				onClickAllPeople={onClickAllPeople}
			/>
			{isFetching && <Preloader />}
			<List isVisited={isVisited} people={people} />
		</section>
	);
};
