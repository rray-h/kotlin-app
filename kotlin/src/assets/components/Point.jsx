import React from 'react';

function Point () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Типы с плавающей точкой</div>
						<div className="about__text">Для действительных чисел в Kotlin есть типы с плавающей точкой Float и Double. Согласно стандарту IEEE 754, типы с плавающей точкой различаются своим десятичным разрядом,
							то есть количеством десятичных цифр, которые они могут хранить. С точки зрения IEEE 754 Float является одинарно точным, а Double обеспечивает двойную точность.<br/>
							Вы можете инициализировать переменные Double и Float числами, имеющими дробную часть. Она должна быть отделена от целой части точкой (.). Для переменных, инициализированных
							дробными числами, компилятор автоматически определяет тип Double.<br/>
							Чтобы явно указать тип Float, добавьте после значения f или F. Если такое значение содержит более 6-7 разрядов, оно будет округлено. </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/basic-types.html">https://kotlinlang.ru/docs/basic-types.html</a> <br />
						</div>

					</div>

					<div className="main-content__code">
					val pi = 3.14 // Double<br/>
					// val one: Double = 1 // Ошибка: несоответствие типов<br/>
					val oneDouble = 1.0 // Double<br/><br/>

					val e = 2.7182818284 // Double<br/>
					val eFloat = 2.7182818284f // Float, фактическое значение 2.7182817</div>

				</div>	
			</div>

		</div>

	);
}

export default Point;