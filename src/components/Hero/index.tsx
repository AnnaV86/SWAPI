import React, { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../contexts/Context';

import style from './hero.module.scss';

export const Hero: FC = () => {
	const { currentPeople, planets, films } = useContext(Context);
	const { name } = useParams();
	const heroInfo = currentPeople.filter(hero => hero.name === name)[0];
	const homeworld = planets.filter(el => el.url === heroInfo.homeworld)[0]
		.name;
	const filmsWithHero = films.filter(el => heroInfo.films.includes(el.url));

	console.log(filmsWithHero);

	return (
		<section className={style.hero}>
			<h1>{heroInfo.name}</h1>
			<p>height: {heroInfo.height}</p>
			<p>mass: {heroInfo.mass}</p>
			<p>hair color: {heroInfo.hair_color}</p>
			<p>skin_color: {heroInfo.skin_color}</p>
			<p>eye_color: {heroInfo.eye_color}</p>
			<p>birth_year: {heroInfo.birth_year}</p>
			<p>gender: {heroInfo.gender}</p>
			<p>homeworld: {homeworld}</p>
			<ul>
				films:
				{filmsWithHero.map(el => (
					<li key={el.url}>{el.title}</li>
				))}
			</ul>
			<p>species: {}</p>
		</section>
	);
};
