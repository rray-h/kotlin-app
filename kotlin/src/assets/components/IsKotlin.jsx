import React from 'react';

function IsKotlin () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Что такое Kotlin?</div>
						<div className="about__text">Kotlin — статически типизированный, объектно-ориентированный язык программирования, работающий поверх Java Virtual Machine и разрабатываемый компанией JetBrains.
							Также компилируется в JavaScript и в исполняемый код ряда платформ через инфраструктуру LLVM.Язык назван в честь острова Котлин в Финском заливе, на котором расположен
							город Кронштадт.Авторы ставили целью создать язык более лаконичный и типобезопасный,чем Java, и более простой, чем Scala. Следствием упрощения по сравнению со Scala стали
							также более быстрая компиляция и лучшая поддержка языка в IDE. Язык полностью совместим с Java, что позволяет Java-разработчикам постепенно перейти к его использованию;
							в частности, язык также встраивается Android, что позволяет для существующего Android-приложения внедрять новые функции на Kotlin без переписывания приложения целиком.</div>
						<div className="about__links">
							<a href="https://ru.wikipedia.org/wiki/Kotlin">https://ru.wikipedia.org/wiki/Kotlin</a> <br />
						</div>

					</div>

{/*					<div className="main-content__code"></div>
*/}
				</div>	
			</div>

		</div>

	);
}

export default IsKotlin;