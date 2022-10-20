import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { NavLink } from "react-router-dom";

function Search () {

	let arr = [], arrMain = [];

	const [value, setValue] = useState('')

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

	// for(let i = 0; i < itemInfo.length; i++) {
	// 	arr.push(itemInfo[i].name.split(' '));
	// }

	// for(let i = 0; i < itemInfo.length; i++) {

	// 	for(let j = 0; j < arr[i].length; j++) {

	// 		arrMain.push(arr[i][j]);
	// 	}
	// }

	for(let i = 0; i < itemInfo.length; i++) {
		arr.push(itemInfo[i].name);
	}

	const filterS = itemInfo.filter((item) => {
		if(value == '') {
			return item.name;
		} else {
			for(let i = 0; i < arr.length; i++) {
				if(item.name.slice(0, value.length).toLowerCase().includes(value.toLowerCase())) {
					return item.name;
				} else {
					continue;
				}
			}		

			console.log(arr);	
		}
	})

	return (
		<div className="search">
			<div className="search__container">
				<div className="search__body">
					<div className="search__form">
						<form action="#" className="form">
							<input type="text" placeholder="Search" id="search" className="form__search" onChange={(event) => setValue(event.target.value)} />
							<button className="form__btn"></button>
						</form>
					</div>


					<ul className="search__list">

						{
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
