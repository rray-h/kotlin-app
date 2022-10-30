import React from 'react';

function Def () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Аргументы по умолчанию</div>
						<div className="about__text">Параметры функции могут иметь значения по умолчанию, которые используются в случае, если аргумент функции не указан при её вызове. Это позволяет снизить уровень
							 перегруженности кода.(Пример 1) <br/><br/>
							Значения по умолчанию указываются после типа знаком =.
							Переопределённые методы всегда используют те же самые значения по умолчанию, что и их базовые методы. При переопределении методов со значениями по умолчанию в сигнатуре
							 эти параметры должны быть опущены.(Пример 2)<br/><br/>
							Если параметр по умолчанию предшествует параметру без значения по умолчанию, значение по умолчанию можно использовать только при вызове функции с именованными аргументами.
							(Пример 3)<br/><br/>
							Но если последний аргумент после параметров по умолчанию - лямбда, вы можете передать её либо как именованный аргумент, либо за скобками.(Пример 4) </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/functions.html">https://kotlinlang.ru/docs/functions.html</a>
						</div>

					</div>

					<div className="main-content__code">
					Пример 1: <br/>
					fun read(<br/>
					⠀⠀⠀⠀b: ByteArray,<br/>
					⠀⠀⠀⠀off: Int = 0,<br/>
					⠀⠀⠀⠀len: Int = b.size,<br/>
					) {leftb} /*...*/ }<br/><br/>

					Пример 2:<br/>
					open class A {leftb}<br/>
					⠀⠀⠀⠀open fun foo(i: Int = 10) {leftb} /*...*/ }<br/>
					}<br/><br/>

					class B : A() {leftb}<br/>
					⠀⠀⠀⠀override fun foo(i: Int) {leftb} /*...*/ } // значение по умолчанию указать нельзя <br/>
					}<br/><br/>

					Пример 3:<br/>
					fun foo(<br/>
					⠀⠀⠀⠀bar: Int = 0,<br/>
					⠀⠀⠀⠀baz: Int,<br/>
					) {leftb} /*...*/ }<br/><br/>

					foo(baz = 1) // Используется значение по умолчанию bar = 0<br/><br/>

					Пример 4:<br/>
					fun foo(<br/>
					⠀⠀⠀⠀bar: Int = 0,<br/>
					⠀⠀⠀⠀baz: Int = 1,<br/>
					⠀⠀⠀⠀qux: () -> Unit,<br/>
					) {leftb} /*...*/ }<br/><br/>

					foo(1) {leftb} println("hello") }     // Используется значение по умолчанию baz = 1 <br/>
					foo(qux = {leftb} println("hello") }) // Используется оба значения по умолчанию: bar = 0 и baz = 1<br/>
					foo {leftb} println("hello") }        // Используется оба значения по умолчанию: bar = 0 и baz = 1</div>

				</div>	
			</div>

		</div>

	);
}

export default Def;