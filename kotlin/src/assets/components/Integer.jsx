import React from 'react';

function Integer () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Целочисленные типы</div>
						<div className="about__text">В Kotlin есть набор встроенных типов, которые представляют числа. Для целых чисел существует четыре типа с разными размерами и,
							следовательно, разными диапазонами значений. Все переменные, инициализированные целыми значениями, не превышающими максимальное значение
							Int, имеют предполагаемый тип Int.Если начальное значение превышает это значение, то тип Long. Чтобы явно указать тип Long, 
							добавьте после значения L. </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/basic-types.html">https://kotlinlang.ru/docs/basic-types.html</a> <br />
						</div>

					</div>

					<div className="main-content__code">
					val one = 1 // Int <br/>
					val threeBillion = 3000000000 // Long<br/>
					val oneLong = 1L // Long<br/>
					val oneByte: Byte = 1</div>

				</div>	
			</div>

		</div>

	);
}

export default Integer;