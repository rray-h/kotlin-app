import React from 'react';

function Zapis () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Инфиксная запись</div>
						<div className="about__text">Функции, помеченные ключевым словом infix, могут вызываться с использованием инфиксной записи (без точки и скобок для вызова). Инфиксные функции должны соответствовать 
							следующим требованиям(Пример 1): <br/>
							⠀⠀⠀⠀Они должны являться членом другой функции или расширения;<br/>
							⠀⠀⠀⠀В них должен использоваться только один параметр;<br/>
							⠀⠀⠀⠀Параметр не должен принимать переменное количество аргументов и не должен иметь значения по умолчанию.<br/>
							Обратите внимание, что инфиксные функции всегда требуют указания как получателя, так и параметра. Когда вы вызываете метод на текущем приемнике, используя инфиксную запись,
							явно используйте this. Это необходимо для обеспечения однозначного синтаксического анализа.(Пример 2) </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/functions.html">https://kotlinlang.ru/docs/functions.html</a>
						</div>

					</div>

					<div className="main-content__code">
					Пример 1: <br/>
					infix fun Int.shl(x: Int): Int {leftb} /*...*/ }<br/><br/>

					// вызов функции, с использованием инфиксной записи<br/>
					1 shl 2<br/><br/>

					// то же самое, что<br/>
					1.shl(2)<br/><br/>

					Пример 2:<br/>
					class MyStringCollection {leftb}<br/>
					⠀⠀⠀⠀infix fun add(s: String) {leftb} /*...*/ }<br/><br/>

					⠀⠀⠀⠀fun build() {leftb}<br/>
					⠀⠀⠀⠀⠀⠀⠀⠀this add "abc" // Верно<br/>
					⠀⠀⠀⠀⠀⠀⠀⠀add("abc")     // Верно<br/>
					⠀⠀⠀⠀⠀⠀⠀⠀//add "abc"    // Не верно: получатель должен быть указан<br/>
					⠀⠀⠀⠀}<br/>
					}</div>

				</div>	
			</div>

		</div>

	);
}

export default Zapis;