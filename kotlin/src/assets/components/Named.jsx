import React from 'react';

function Named () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Именованные аргументы</div>
						<div className="about__text">При вызове функции вы можете явно указать имена одного или нескольких аргументов. Это может быть полезно, когда у функции большой список аргументов, и сложно связать значение
							 с аргументом, особенно если это логическое или null значение.<br/>
							При явном указывании имен аргументов в вызове функции, вы можете свободно изменять порядок их перечисления, и, если вы хотите использовать их значения по умолчанию, вы можете
							 просто пропустить эти аргументы.<br/>
							Рассмотрим следующую функцию reformat(), которая имеет 4 аргумента со значениями по умолчанию.(Пример 1)<br/><br/>
							При её вызове, вам не нужно явно указывать все имена аргументов.(Пример 2)<br/><br/>
							Вы можете пропустить все аргументы со значением по умолчанию.(Пример 3)<br/><br/>
							Вы также можете пропустить не только все аргументы со значениями по умолчанию, но и лишь некоторые из них. Однако после первого пропущенного аргумента вы должны указывать
							имена всех последующих аргументов.(Пример 4)<br/><br/>
							Вы можете передать переменное количество аргументов (vararg) с именами, используя оператор spread.(Пример 5) </div>
						<div className="about__links">
								<a href="https://kotlinlang.ru/docs/functions.html">https://kotlinlang.ru/docs/functions.html</a>
						</div>

					</div>

					<div className="main-content__code">
					Пример 1: <br/>
					fun reformat(<br/>
					⠀⠀⠀⠀str: String,<br/>
					⠀⠀⠀⠀normalizeCase: Boolean = true,<br/>
					⠀⠀⠀⠀upperCaseFirstLetter: Boolean = true,<br/>
					⠀⠀⠀⠀divideByCamelHumps: Boolean = false,<br/>
					⠀⠀⠀⠀wordSeparator: Char = ' ',<br/>
					) {leftb} /*...*/ }<br/><br/>

					Пример 2:<br/>
					reformat(<br/>
					⠀⠀⠀⠀"String!",<br/>
					⠀⠀⠀⠀false,<br/>
					⠀⠀⠀⠀upperCaseFirstLetter = false,<br/>
					⠀⠀⠀⠀divideByCamelHumps = true,<br/>
					⠀⠀⠀⠀'_'<br/>
					)<br/><br/>

					Пример 3:<br/>
					reformat("This is a long String!")<br/><br/>

					Пример 4:<br/>
					reformat("This is a short String!", upperCaseFirstLetter = false, wordSeparator = '_')<br/><br/>

					Пример 5:<br/>
					fun foo(vararg strings: String) {leftb} /*...*/ }<br/>
					foo(strings = *arrayOf("a", "b", "c"))</div>

				</div>	
			</div>

		</div>

	);
}

export default Named;