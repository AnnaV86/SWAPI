import React, { FC, useContext } from 'react';
import { IHero } from '../../../../../models';
import { useNavigate } from 'react-router-dom';
import style from './cardHero.module.scss';
import { Context } from '../../../../../contexts/Context';

interface ICardHero {
	hero: IHero;
}
export const CardHero: FC<ICardHero> = ({ hero }) => {
	const navigate = useNavigate();
	const { onClickVisited } = useContext(Context);

	const onClickHero = () => {
		onClickVisited(hero);
		navigate(`/hero/${hero.name}`);
	};

	return (
		<li className={style.item} onClick={onClickHero}>
			<h1 className={style.title}>{hero.name}</h1>
		</li>
	);
};
