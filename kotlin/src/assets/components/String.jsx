import React from 'react';

function StringType () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Символы и строки</div>
						<div className="about__text">Символы в Kotlin представлены типом Char. Символьные литералы заключаются в одинарные кавычки: '1'.
							Специальные символы начинаются с обратного слеша \. Поддерживаются следующие escape-последовательности: \t, \b, \n, \r, \', \", \\ и \$.
							Для кодирования любого другого символа используйте синтаксис escape-последовательности Юникода: '\uFF00'. (Пример 1)<br/><br/>
							Если значение символьной переменной – цифра, её можно явно преобразовать в Int с помощью функции digitToInt().<br/><br/>

							Строки в Kotlin представлены типом String. Как правило, строка представляет собой последовательность символов в двойных кавычках (").(Пример 2)<br/><br/>
							Строки состоят из символов, которые могут быть получены по порядковому номеру: s[i]. Проход по строке выполняется циклом for.(Пример 3)<br/><br/>
							Строки являются неизменяемыми. После инициализации строки вы не можете изменить ее значение или присвоить ей новое. Все операции, преобразующие
							строки, возвращают новый объект String, оставляя исходную строку неизменной.(Пример 4)<br/><br/>
							Для объединения строк используется оператор +. Это работает и для объединения строк с другими типами, если первый элемент в выражении является строкой.(Пример 5)<br/><br/>
							Обратите внимание, что в большинстве случаев использование строковых шаблонов или обычных строк предпочтительнее объединения строк.</div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/basic-types.html">https://kotlinlang.ru/docs/basic-types.html</a> <br />
						</div>

					</div>

					<div className="main-content__code">
					Пример 1:<br/>
					val aChar: Char = 'a'<br/><br/>

					println(aChar)<br/>
					println('\n') // выводит дополнительный символ новой строки<br/>
					println('\uFF00')<br/><br/>
					Пример 2:<br/>
					val str = "abcd 123"<br/><br/>

					Пример 3:<br/>
					for (c in str) {leftb}<br/>
					    println(c)<br/>
					{rightb}<br/><br/>

					Пример 4:<br/>
					Пример 1val str = "abcd"<br/>
					println(str.uppercase()) // Создается и выводится новый объект String<br/>
					println(str) // исходная строка остается прежней<br/><br/>

					Пример 5:<br/>
					val s = "abc" + 1<br/>
					println(s + "def")</div>

				</div>	
			</div>

		</div>

	);
}

export default StringType;