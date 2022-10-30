import React from 'react';

function Func () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Функции</div>
						<div className="about__text">В Kotlin функции объявляются с помощью ключевого слова fun.(Пример 1) <br/><br/>
							При вызове функции используется традиционный подход.(Пример 2)<br/><br/>
							Для вызова вложенной функции используется знак точки.(Пример 3)<br/><br/>
							Параметры функции записываются аналогично системе обозначений в языке Pascal - имя: тип. Параметры разделены запятыми. Каждый параметр должен быть явно указан.(Пример 4)<br/><br/>
							Параметры функции записываются аналогично системе обозначений в языке Pascal - имя: тип. Параметры разделены запятыми. Каждый параметр должен быть явно указан.(Пример 5) </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/functions.html">https://kotlinlang.ru/docs/functions.html</a>
						</div>

					</div>

					<div className="main-content__code">
					Пример 1: <br/>
					fun double(x: Int): Int {leftb}<br/>
					⠀⠀⠀⠀return 2 * x<br/>
					}<br/><br/>

					Пример 2:<br/>
					val result = double(2)<br/><br/>
						
					Пример 3:<br/>
					Stream().read() //создаёт экземпляр класса Stream и вызывает read()<br/><br/>

					Пример 4:<br/>
					fun powerOf(number: Int, exponent: Int): Int {leftb} /*...*/ }<br/><br/>

					Пример 5:<br/>
					fun powerOf(<br/>
					⠀⠀⠀⠀number: Int,<br/>
					⠀⠀⠀⠀exponent: Int, // завершающая запятая<br/>
					) {leftb} /*...*/ }</div>

				</div>	
			</div>

		</div>

	);
}

export default Func;