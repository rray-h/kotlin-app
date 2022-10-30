import React from 'react';

function Uncheked () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Непроверяемые (Unchecked) приведения</div>
						<div className="about__text">Как упоминалось выше, стирание типов делает невозможным проверку типа аргумента обобщения на этапе выполнения, и обобщенные типы в коде могут быть недостаточно связаны 
							друг с другом, чтобы компилятор обеспечил типобезопасность. <br/>
							Тем не менее иногда мы имеем программную логику высокого уровня, которая подразумевает типобезопасность.(Пример 1)<br/>
							Компилятор выдает предупреждение для приведения в последней строке. Приведение не может быть полностью проверено во время выполнения и нет дает гарантии,
							что значения в словаре (map) являются Int.<br/>
							Чтобы избежать непроверяемые приведения, вы можете изменить структуру программы: в примере выше возможно объявить интерфейсы DictionaryReader{lefta}T{righta} и DictionaryWriter{leftb}T{rightb} 
							с типобезопасными имплементациями для различных типов. Правильное использование вариативности обобщений также может помочь.
							Для обобщенных функций, используемых встроенные (inline) функции с параметрами вещественного типа приведение типа arg as T является проверяемым, до тех пор,
							пока тип arg не имеет свои аргументы типа, которые были стерты.<br/>
							Предупреждение о непроверяемом приведении можно убрать используя аннотации @Suppress("UNCHECKED_CAST").(Пример 2) </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/typecasts.html">https://kotlinlang.ru/docs/typecasts.html</a> <br />
						</div>

					</div>

					<div className="main-content__code">
					Пример 1: <br/>
					fun readDictionary(file: File): Map{lefta}String, *{righta} = file.inputStream().use {leftb} <br/>
					⠀⠀⠀⠀TODO("Прочитать сопоставление строк с произвольными элементами.") <br/>
					{rightb} <br/> <br/>

					// Мы сохранили словарь (map) `Int`ов в файл
					val intsFile = File("ints.dictionary")  <br/> <br/>

					// Warning: Unchecked cast: `Map{lefta}String, *{righta}` to `Map{lefta}String, Int>`
					val intsDictionary: Map{lefta}String, Int{righta} = readDictionary(intsFile) as Map{lefta}String, Int{righta} <br/> <br/>

					Пример 2: <br/>
					inline fun {lefta}reified T{righta} List{lefta}*{righta}.asListOfType(): List{lefta}T{righta}? = <br/>
					⠀⠀⠀if (all {leftb} it is T {rightb})<br/>
					⠀⠀⠀⠀⠀⠀@Suppress("UNCHECKED_CAST")<br/>
					⠀⠀⠀⠀⠀⠀this as List{lefta}T{righta} else<br/>
					⠀⠀⠀⠀⠀⠀null</div>

				</div>	
			</div>

		</div>

	);
}

export default Uncheked;