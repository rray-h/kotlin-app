import React from 'react';

function Literal () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Строковые литералы</div>
						<div className="about__text">В Kotlin представлены два типа строковых литералов: <br/>
							экронированные строки с экранированными символами
							(Пример 1)<br/><br/>
							Обычные строки, которые могут содержать символы новой строки и произвольный текст
						Экранирование выполняется общепринятым способом, а именно с помощью обратного слеша (\). Список поддерживаемых escape-последовательностей см. в разделе Символы выше.
						Обычная строка выделена тройной кавычкой ("""), не содержит экранированных символов, но может содержать символы новой строки и любые другие символы.
						(Пример 2)<br/><br/>
						Чтобы удалить пробелы в начале обычных строк, используйте функцию trimMargin().(Пример 3)<br/><br/>
						По умолчанию | используется в качестве префикса поля, но вы можете выбрать другой символ и передать его в качестве параметра, например, trimMargin(">").</div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/basic-types.html">https://kotlinlang.ru/docs/basic-types.html</a> <br />
						</div>

					</div>

					<div className="main-content__code">
					Пример 1: <br/>
					val s = "Hello, world!\n"<br/><br/>
					Пример 2:<br/>
					val text = """<br/>
					⠀⠀for (c in "foo")<br/>
					⠀⠀⠀⠀print(c)<br/>
					"""<br/><br/>
					Пример 3:<br/>
					val text = """<br/>
					⠀⠀⠀⠀|Tell me and I forget.<br/>
					⠀⠀⠀⠀|Teach me and I remember.<br/>
					⠀⠀⠀⠀|Involve me and I learn.<br/>
					⠀⠀⠀⠀|(Benjamin Franklin)<br/>
					⠀⠀⠀⠀⠀""".trimMargin()</div>

				</div>	
			</div>

		</div>

	);
}

export default Literal;