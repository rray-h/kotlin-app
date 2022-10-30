import React from 'react';

function Clear () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Стирание и проверка типов у Обобщений (Generics)</div>
						<div className="about__text">Котлин обеспечивает типобезопасность операций, связанных с обобщениями на этапе компиляции, в то время как информация о типе аргумента обобщения недоступна во время выполнения
							программы. Например, для List{lefta}Foo> происходит стирание типа, что превращает его в List{lefta}*>. В связи с чем, нет способа проверить, принадлежит ли объект конкретному типу
							во время выполнения программы. <br/>
							Учитывая это, компилятор запрещает is-проверки, которые не могут быть выполнены во время выполнения программы из-за стирания типов, например ints is List{lefta}Int> или list
							is T (параметризированный тип). Однако у вас есть возможность произвести проверку со "звёздными" проекциями.(Пример 1)<br/>
							Таким же образом, когда у вас есть статически определенный тип аргумента, вы можете произвести is-проверку или приведение с необобщенной частью типа.
							Заметьте, что в данном случае угловые скобки пропущены(Пример 2).<br/>
							Аналогичный синтаксис, но с пропущенным типом аргумента может использоваться для приведений, которые не принимают типы аргументы: list as ArrayList.<br/><br/>

							Встроенные (inline) функции с параметрами вещественного типа имеют свои аргументы типа, встроенные на каждый момент вызова, что позволяет arg is T проверять параметризованный
							тип, но если arg является объектом обобщенного типа, его аргумент типа по-прежнему стираются.(Пример 3) </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/typecasts.html">https://kotlinlang.ru/docs/typecasts.html</a>
						</div>

					</div>

					<div className="main-content__code">
					Пример 1: <br/>
					if (something is List{lefta}*>) {leftb}<br/>
					⠀⠀⠀⠀something.forEach {leftb} println(it) } // Элементы типа `Any?`<br/>
					}<br/>
					Пример 2:<br/>
					fun handleStrings(list: List{lefta}String>) {leftb}<br/>
					⠀⠀⠀⠀if (list is ArrayList) {leftb}<br/>
					⠀⠀⠀⠀⠀⠀⠀⠀// `list` приводится к `ArrayList{lefta}String>` путём "умного приведения"<br/>
					⠀⠀⠀⠀}<br/>
					}<br/>
					Пример 3:<br/>
					inline fun {lefta}reified A, reified B> Pair{lefta}*, *>.asPairOf(): Pair{lefta}A, B>? {leftb}<br/>
					⠀⠀⠀⠀if (first !is A || second !is B) return null<br/>
					⠀⠀⠀⠀return first as A to second as B<br/>
					}<br/><br/>

					val somePair: Pair{lefta}Any?, Any?> = "items" to listOf(1, 2, 3)<br/><br/>

					val stringToSomething = somePair.asPairOf{lefta}String, Any>()<br/>
					val stringToInt = somePair.asPairOf{lefta}String, Int>()<br/>
					val stringToList = somePair.asPairOf{lefta}String, List{lefta}*>>()<br/>
					val stringToStringList = somePair.asPairOf{lefta}String, List{lefta}String>>() // Нарушает типобезопасность!<br/><br/>

					fun main() {leftb}<br/>
					⠀⠀⠀⠀println("stringToSomething = " + stringToSomething)<br/>
					⠀⠀⠀⠀println("stringToInt = " + stringToInt)<br/>
					⠀⠀⠀⠀println("stringToList = " + stringToList)<br/>
					⠀⠀⠀⠀println("stringToStringList = " + stringToStringList)<br/>
					⠀⠀⠀⠀//println(stringToStringList?.second?.forEach() {leftb}it.length}) // Это вызовет исключение ClassCastException, так как элементы списка не являются строками
					}</div>

				</div>	
			</div>

		</div>

	);
}

export default Clear;