import React, { FC } from 'react';
import style from './search.module.scss';

interface ISearch {
	onChangePeople: (evt: React.ChangeEvent<HTMLInputElement>) => void;
	onClickVisitedFilter: () => void;
	onClickAllPeople: () => void;
}
export const Search: FC<ISearch> = ({
	onChangePeople,
	onClickVisitedFilter,
	onClickAllPeople
}) => {
	return (
		<div className={style.container}>
			<input
				className={style.input}
				onChange={onChangePeople}
				placeholder="Введите имя персонажа"
			/>
			<div className={style.wrapper}>
				<button
					className={style.button}
					type="button"
					onClick={onClickAllPeople}
					autoFocus
				>
					Все
				</button>
				<button
					className={style.button}
					type="button"
					onClick={onClickVisitedFilter}
				>
					Просмотренные
				</button>
			</div>
		</div>
	);
};
