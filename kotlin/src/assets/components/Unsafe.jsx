import React from 'react';

function Unsafe () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Оператор небезопасного приведения.</div>
						<div className="about__text">Обычно оператор приведения выбрасывает исключение, если приведение невозможно, поэтому мы называем его небезопасным. Небезопасное приведение в Kotlin выполняется с 
							помощью инфиксного оператора as(Пример 1). <br/>
							Заметьте, что null не может быть приведен к String, так как String не является nullable, т.е. если y - null, код выше выбросит исключение.
							Чтобы сделать этот код корректным для null-значений, используйте nullable-тип в правой части приведения.(Пример 2)<br/><br/>

							Чтобы избежать исключения, вы можете использовать оператор безопасного приведения as?, который возвращает null в случае неудачи.(Пример 3)<br/>
							Заметьте, что несмотря на то, что справа от as? стоит non-null тип String, результат приведения является nullable. </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/typecasts.html">https://kotlinlang.ru/docs/typecasts.html</a>
						</div>

					</div>

					<div className="main-content__code">
					Пример 1:<br/>
					val x: String = y as String<br/>
					Пример 2:<br/>
					val x: String? = y as String?<br/>
					Пример 3:<br/>
					val x: String? = y as? String</div>

				</div>	
			</div>

		</div>

	);
}

export default Unsafe;