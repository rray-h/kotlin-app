import React from 'react';

function ArrayType () {
		
	const lefta = '<';
	const righta = '>';
	
	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Массивы</div>
						<div className="about__text">Массивы в Kotlin представлены классом Array, обладающим функциями get и set (которые обозначаются [] согласно соглашению о перегрузке операторов), 
							и свойством size, а также несколькими полезными встроенными функциями. Массивы в Kotlin представлены классом Array, обладающим функциями get и set
							(которые обозначаются [] согласно соглашению о перегрузке операторов), и свойством size, а также несколькими полезными встроенными функциями.(Пример 1)<br/><br/>

							Для создания массива используйте функцию arrayOf(), которой в качестве аргумента передаются элементы массива, т.е. выполнение arrayOf(1, 2, 3)
							создаёт массив [1, 2, 3]. С другой стороны функция arrayOfNulls() может быть использована для создания массива заданного размера, заполненного значениями null.
							Также для создания массива можно использовать фабричную функцию, которая принимает размер массива и функцию, возвращающую начальное значение каждого элемента
							по его индексу.(Пример 2)<br/><br/>
							Как отмечено выше, оператор [] используется вместо вызовов встроенных функций get() и set().

							Обратите внимание: в отличие от Java массивы в Kotlin являются инвариантными. Это значит, что Kotlin запрещает нам присваивать массив Array{lefta}String{righta} переменной
							типа Array {lefta}Any{righta}, предотвращая таким образом возможный отказ во время исполнения (хотя вы можете использовать Array{lefta}out Any{righta}, см. Проекции типов).
							</div>
						<div className="about__links">
							<a href="https://metanit.com/kotlin/tutorial/2.3.php">https://metanit.com/kotlin/tutorial/2.3.php</a> <br />
						</div>

					</div>

					<div className="main-content__code">

						Пример 1: <br/>
						class Array{lefta}T{righta} private constructor() {leftb} <br/>
						    val size: Int <br/>
						    operator fun get(index: Int): T <br/>
						    operator fun set(index: Int, value: T): Unit <br/>

						    operator fun iterator(): Iterator{lefta}T{righta} <br/>
						    // ... <br/>
						{rightb}

						<br/> <br/>

						Пример 2: <br/>
						// создаёт массив типа Arr{lefta}String{righta} со значениями ["0", "1", "4", "9", "16"] <br/> <br/>
						val asc = Array(5) {leftb} i -{righta} (i * i).toString() {rightb} <br/>
						asc.forEach {leftb} println(it) {rightb}<br/>

					</div>

				</div>	
			</div>

		</div>

	);
}

export default ArrayType;