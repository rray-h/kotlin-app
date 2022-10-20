import React from 'react';

function Operation () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Операции</div>
						<div className="about__text">Котлин поддерживает стандартный набор арифметических операций над числами: +, -, *, /, %. Они объявляются членами соответствующих классов.(Пример 1)<br/><br/>
							Вы также можете переопределить эти операторы для пользовательских классов.

							Деление целых чисел всегда возвращает целое число. Любая дробная часть отбрасывается.
							Это справедливо для деления любых двух целочисленных типов.
							(Пример 2)<br/><br/>
							Чтобы вернуть тип с плавающей точкой, явно преобразуйте один из аргументов в тип с плавающей точкой.
							(Пример 3)<br/><br/>

							Kotlin поддерживает обычный набор побитовых операций над целыми числами. Они работают на двоичном уровне непосредственно с битовыми представлениями чисел. 
							Побитовые операции представлены функциями, которые могут быть вызваны в инфиксной форме. Они могут быть применены только к Int и Long.
							(Пример 4)<br/><br/>
								shl(bits) – сдвиг влево с учётом знака ({lefta}{lefta} в Java)<br/>
								shr(bits) – сдвиг вправо с учётом знака (>> в Java)<br/>
								ushr(bits) – сдвиг вправо без учёта знака (>>> в Java)<br/>
								and(bits) – побитовое И<br/>
								or(bits) – побитовое ИЛИ<br/>
								xor(bits) – побитовое исключающее ИЛИ<br/>
								inv() – побитовое отрицание </div>
						<div className="about__links">
							<a href="https://metanit.com/kotlin/tutorial/2.4.php">https://metanit.com/kotlin/tutorial/2.4.php</a> <br />
						</div>

					</div>

					<div className="main-content__code">
					Пример 1: <br/>
					println(1 + 2)<br/>
					println(2_500_000_000L - 1L)<br/>
					println(3.14 * 2.71)<br/>
					println(10.0 / 3)<br/><br/>
					Пример 2:<br/>
					val x = 5 / 2<br/>
					// println(x == 2.5) // ОШИБКА: Оператор '==' не может быть применен к 'Int' и 'Double'<br/>
					println(x == 2) // true<br/>

					val x = 5L / 2<br/>
					println(x == 2L) // true<br/><br/>

					Пример 3:<br/>
					val x = 5 / 2.toDouble()<br/>
					println(x == 2.5) // true<br/><br/>

					Пример 4:<br/>
					val x = (1 shl 2) and 0x000FF000</div>

				</div>	
			</div>

		</div>

	);
}

export default Operation;