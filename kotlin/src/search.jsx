import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { NavLink } from "react-router-dom";

function Search () {


	// Здесь создается состояние, 
	// в setValue поподает весь текст, что заполняется в блоке поиска(строка 43, событие onChange),
	// в value весь текст сохраняется сохраняется 
	const [value, setValue] = useState('');


	//Это массив обЪектов, в котором хранятся наши блоки-заголовки,
	//и автоматически генерируются через фильтр
	const itemInfo = [
		{name: 'Что такое Kotlin?', classNL: 'search__item', classNA: 'search__link', path: '/iskotlin'},
		{name: 'История языка Kotlin', classNL: 'search__item', classNA: 'search__link', path: '/kotlin'},
		{name: 'Логический тип', classNL: 'search__item', classNA: 'search__link', path: '/boolean'},
		{name: 'Массивы', classNL: 'search__item', classNA: 'search__link', path: '/array'},
		{name: 'Массивы примитивных типов', classNL: 'search__item', classNA: 'search__link', path: '/arrayprim'},
		{name: 'Операции', classNL: 'search__item', classNA: 'search__link', path: '/operation'},
		{name: 'Представление чисел в JVM', classNL: 'search__item', classNA: 'search__link', path: '/jvm'},
		{name: 'Символы и строки', classNL: 'search__item', classNA: 'search__link', path: '/string'},
		{name: 'Символьные постоянные', classNL: 'search__item', classNA: 'search__link', path: '/permanent'},
		{name: 'Строковые литералы', classNL: 'search__item', classNA: 'search__link', path: '/literal'},
		{name: 'Типы с плавающей точкой', classNL: 'search__item', classNA: 'search__link', path: '/point'},
		{name: 'Целочисленные типы', classNL: 'search__item', classNA: 'search__link', path: '/integer'},
	]

	//Здесь создается фильтр,
	//по которому появляются блоки-заголовки
	//изначально фильтр пустой(то есть блоки-заголовки никак не фильтруются),
	//когда в блок поиска что-что вводится, вводимый текст становится фильтром для наших блоков,
	//сортируя их по названию блока-заголовка, сопостовляя вводимый текст
	const arrWords = itemInfo.map((item) => {
		return item.name.toLowerCase().split(' ');
	})

	const filterS = itemInfo.filter((item) => {
		
		for(let i = 0; i < arrWords.length; i++) {

			for(let j = 0; j < arrWords[i].length; j++) {


				if(arrWords[i][j].slice(0, value.length).toLowerCase().includes(value.toLowerCase())) {

					if(item.name.toLowerCase().includes(arrWords[i].join(' '))) {
						return item.name;
					} 
				}



				// if(item.name.slice(0, value.length).toLowerCase().includes(value.toLowerCase())) {
				// 	return item.name;
				// }
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
							<input type="text" placeholder="Search" id="search" className="form__search" onChange={(event) => setValue(event.target.value)} />
							<div className="form__btn"></div>
						</form>
					</div>


					<ul className="search__list">

						{
							//Здесь функция выводит блоки-загловки через фильтр
							filterS.map((item, i) => {
								return (
									<NavLink key={i} className={item.classNL} to={item.path}> <li className={item.classNA}>{item.name}</li> </NavLink>
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
