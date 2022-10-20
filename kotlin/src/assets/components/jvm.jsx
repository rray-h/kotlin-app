import React from 'react';

function JVM () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Представление чисел в JVM</div>
						<div className="about__text">Обычно платформа JVM хранит числа в виде примитивных типов: int, double и так далее. Если же вам необходима ссылка, которая может принимать значение null (например, Int?),
							 то используйте обёртки. В этих случаях числа помещаются в Java классы как Integer, Double и так далее.<br/><br/>

							Обратите внимание, что использование обёрток для одного и того же числа не гарантирует равенства ссылок на них.
							(Пример 1)<br/><br/>

							Все nullable-ссылки на a на самом деле являются одним и тем же объектом из-за оптимизации памяти, которую JVM применяет к Integer между "-128" и "127".
							Но b больше этих значений, поэтому ссылки на b являются разными объектами.
							Однако, равенство по значению сохраняется. </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/basic-types.html">https://kotlinlang.ru/docs/basic-types.html</a> <br />
						</div>

					</div>

					<div className="main-content__code">
						Пример 1:<br/>
						val a: Int = 100<br/>
						val boxedA: Int? = a<br/>
						val anotherBoxedA: Int? = a<br/><br/>

						val b: Int = 10000<br/>
						val boxedB: Int? = b<br/>
						val anotherBoxedB: Int? = b<br/><br/>

						println(boxedA === anotherBoxedA) // true<br/>
						println(boxedB === anotherBoxedB) // false<br/><br/>

						Пример 2:<br/>
						val b: Int = 10000<br/>
						println(b == b) // Prints 'true'<br/>
						val boxedB: Int? = b<br/>
						val anotherBoxedB: Int? = b<br/>
						println(boxedB == anotherBoxedB) // Prints 'true'
					</div>
				</div>	
			</div>

		</div>

	);
}

export default JVM;