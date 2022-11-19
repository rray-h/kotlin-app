
import React from 'react';

function ArrayPrimType () {
	const lefta = '<';
	const righta = '>';
	
	const leftb = '{';
	const rightb = '}';

	const text = "Также в Kotlin есть особые классы для представления массивов примитивных типов без дополнительных затрат на оборачивание: ByteArray, ShortArray, IntArray и т.д. Данные классы не наследуют класс Array, хотя и обладают тем же набором методов и свойств. У каждого из них есть соответствующая фабричная функция"

		return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Массивы примитивных типов</div>
						<div className="about__text">{text}</div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/basic-types.html">https://kotlinlang.ru/docs/basic-types.html</a> <br />
						</div>

					</div>

					<div className="main-content__code">

						val x: IntArray = intArrayOf(1, 2, 3) <br/>
						x[0] = x[1] + x[2] <br/>
						// int массив, размером 5 со значениями [0, 0, 0, 0, 0] <br/>
						val arr = IntArray(5) <br/><br/>

						// инициализация элементов массива константой<br/>
						// int массив, размером 5 со значениями [42, 42, 42, 42, 42]<br/>
						val arr = IntArray(5) {leftb} 42 {rightb}<br/><br/>

						// инициализация элементов массива лямбда-выражением<br/>
						// int массив, размером 5 со значениями [0, 1, 2, 3, 4] (элементы инициализированы своим индексом)<br/>
						var arr = IntArray(5) {lefta} it * 1 {rightb} <br/>

					</div>

				</div>	
			</div>

		</div>

	);
}

export default ArrayPrimType;