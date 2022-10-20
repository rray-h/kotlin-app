import React from 'react';

function Transform () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Явные преобразования</div>
						<div className="about__text">Из-за разницы в представлениях меньшие типы не являются подтипами бОльших типов. В противном случае возникли бы сложности.(Пример 1)<br/><br/>

							Таким образом, будет утрачена не только тождественность (равенство по ссылке), но и равенство по значению.
							Как следствие, неявное преобразование меньших типов в большие НЕ происходит. Это значит, что мы не можем
							присвоить значение типа Byte переменной типа Int без явного преобразования.
							(Пример 2)<br/><br/>

							Каждый численный тип поддерживает следующие преобразования:<br/>
								toByte(): Byte<br/>
								toShort(): Short<br/>
								toInt(): Int<br/>
								toLong(): Long<br/>
								toFloat(): Float<br/>
								toDouble(): Double<br/>
								toChar(): Char<br/>
							Часто необходимости в явных преобразованиях нет, поскольку тип выводится из контекста, а арифметические действия перегружаются для подходящих преобразований.</div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/basic-types.html">https://kotlinlang.ru/docs/basic-types.html</a> <br />
						</div>

					</div>

					<div className="main-content__code">
					Пример 1:<br/>
						val a: Int? = 1 // "Обёрнутый" Int (java.lang.Integer)<br/>
						val b: Long? = a // неявное преобразование возвращает "обёрнутый" Long (java.lang.Long)<br/>
						print(b == a) // Нежданчик! Данное выражение выведет "false" т. к. метод equals() типа Long предполагает, что вторая часть выражения также имеет тип Long<br/><br/>

						Пример 2:<br/>
						val b: Byte = 1 // всё хорошо, литералы проверяются статически<br/>
						// val i: Int = b // ОШИБКА<br/>
						val i1: Int = b.toInt()<br/><br/>

						Пример 3:<br/>
						val l = 1L + 3 // Long + Int => Long</div>

				</div>	
			</div>

		</div>

	);
}

export default Transform;