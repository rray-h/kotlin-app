import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { NavLink } from "react-router-dom";

import {itemInfo} from "./source";

function Search () {
	// Здесь создается состояние, 
	// в setValue попадает весь текст, что заполняется в блоке поиска(строка 43, событие onChange),
	// в value весь текст сохраняется
	const [value, setValue] = useState('');

	//Здесь генерируется массив объектов, берущий данные из файла source.jsx
	const titles = itemInfo.map((item) => {
		return item;
	})
	//Здесь создается фильтр,
	//по которому появляются блоки-заголовки
	//изначально фильтр пустой(то есть блоки-заголовки никак не фильтруются),
	//когда в блок поиска что-что вводится, вводимый текст становится фильтром для наших блоков,
	//сортируя их по названию блока-заголовка, сопостовляя вводимый текст
	const filterArray = titles.filter((item) => {
		
		if(value.toLowerCase() === '') {
			return item.name;
		} 
		else if(value.toLowerCase() === '?' || value.toLowerCase() == '(' || value.toLowerCase() == ')') {
			return 0;
		} 
		else {

			let index = [];

			for(let i = 0; i < item.name.length; i++) {

				if(item.name[i] === ' ') {
					index.push(i);
				};
			}

			if(item.name.toLowerCase().includes(value.toLowerCase())) {

				for(let j = 0; j < item.name.length; j++) {

					if(item.name.toLowerCase().search(value.toLowerCase()) === (index[j] + 1)) {
						return item.name;
					}
				}
			}
		} 
	})

	// Здесь генерируется лицевая часть блока поиска и заголовков
	return (
		<div className="search">
			<div className="search__container">
				<div className="search__body">
					<div className="search__form">
						<form action="#" className="form">
							<input type="text" placeholder="Search" 
							id="search" className="form__search" 
							onChange={(event) => setValue(event.target.value)} />
							<div className="form__btn"></div>
						</form>
					</div>


					<ul className="search__list">

						{
							//Здесь функция выводит блоки-загловки через фильтр
							filterArray.map((item, i) => {
								return (
									<NavLink key={i} className={item.classNL} to={item.path}> 
										<li className={item.classNA}>{item.name}</li> 
									</NavLink>
								)
							})
						}

					</ul>
				</div>
			</div>
		</div>
	);
}

export default Search;
