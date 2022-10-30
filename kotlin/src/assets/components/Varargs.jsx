import React from 'react';

function Varargs () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Нефиксированное число аргументов (varargs)</div>
						<div className="about__text">Параметр функции (обычно для этого используется последний) может быть помечен модификатором vararg.(Пример 1)
							Это позволит указать несколько значений в качестве аргументов функции.(Пример 2) <br/>
							Внутри функции параметр с меткой vararg и типом T виден как массив элементов T, таким образом переменная ts в вышеуказанном примере имеет тип Array{leftb}out T>.<br/><br/>

							Только один параметр может быть помечен как vararg. Если параметр с именем vararg не стоит на последнем месте в списке аргументов, значения для последующих параметров<br/>
							могут быть переданы только с использованием синтаксиса именованных аргументов.В случае, если параметр является функцией, для этих целей можно вынести лямбду за фигурные скобки.<br/><br/>

							При вызове vararg-функции вы можете передать аргументы один за другим, например asList(1, 2, 3), или, если у нас уже есть необходимый массив элементов и вы хотите передать <br/>
							его содержимое в функцию, используйте оператор spread (необходимо пометить массив знаком *).(Пример 3)<br/>
							Если вы хотите передать массив примитивного типа в vararg, вам необходимо преобразовать его в обычный (типизированный) массив с помощью функции toTypedArray().(Пример 4) </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/functions.html">https://kotlinlang.ru/docs/functions.html</a>
						</div>

					</div>

					<div className="main-content__code">
					Пример 1:
					fun {lefta}T> asList(vararg ts: T): List{lefta}T> {leftb}<br/>
					⠀⠀⠀val result = ArrayList{lefta}T>()<br/>
					⠀⠀⠀⠀for (t in ts) // ts - это массив (Array)<br/>
					⠀⠀⠀⠀⠀⠀result.add(t)<br/>
					⠀⠀⠀⠀return result<br/>
					}<br/><br/>

					Пример 2:<br/>
					val list = asList(1, 2, 3)<br/><br/>

					Пример 3:<br/>
					val a = arrayOf(1, 2, 3)<br/>
					val list = asList(-1, 0, *a, 4)<br/><br/>

					Пример 4:<br/>
					val a = intArrayOf(1, 2, 3) // IntArray - массив примитивного типа<br/>
					val list = asList(-1, 0, *a.toTypedArray(), 4)</div>

				</div>	
			</div>

		</div>

	);
}

export default Varargs;