import React, { FC, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../../contexts/Context';

import style from './hero.module.scss';

export const Hero: FC = () => {
	const navigate = useNavigate();
	const { currentPeople } = useContext(Context);
	const { name } = useParams();

	const heroInfo = currentPeople.find(hero => hero.name === name);

	const onClickBack = () => {
		navigate(-1);
	};

	if (!heroInfo) {
		return null;
	}

	return (
		<section className={style.hero}>
			<h1 className={style.title}>{heroInfo.name}</h1>
			<p>height: {heroInfo.height}</p>
			<p>mass: {heroInfo.mass}</p>
			<p>hair color: {heroInfo.hair_color}</p>
			<p>skin_color: {heroInfo.skin_color}</p>
			<p>eye_color: {heroInfo.eye_color}</p>
			<p>birth_year: {heroInfo.birth_year}</p>
			<p>gender: {heroInfo.gender}</p>
			<button type="button" onClick={onClickBack}>
				Назад
			</button>
		</section>
	);
};
