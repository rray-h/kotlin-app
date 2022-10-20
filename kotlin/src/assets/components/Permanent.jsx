import React from 'react';

function Peramanent () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Символьные постоянные</div>
						<div className="about__text">В языке Kotlin присутствуют следующие виды символьных постоянных (констант) для целых значений:<br/>
								Десятичные числа: 123<br/>
								Тип Long обозначается заглавной L: 123L<br/>
								Шестнадцатеричные числа: 0x0F<br/>
								Двоичные числа: 0b00001011<br/><br/>

							Также Kotlin поддерживает числа с плавающей запятой:<br/>
								Тип Double по умолчанию: 123.5, 123.5e10<br/>
								Тип Float обозначается с помощью f или F: 123.5f<br/><br/>

							Вы можете использовать нижние подчеркивания, чтобы сделать числовые константы более читаемыми. </div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/basic-types.html">https://kotlinlang.ru/docs/basic-types.html</a> <br />
						</div>

					</div>

					<div className="main-content__code">
					val oneMillion = 1_000_000<br/>
					val creditCardNumber = 1234_5678_9012_3456L<br/>
					val socialSecurityNumber = 999_99_9999L<br/>
					val hexBytes = 0xFF_EC_DE_5E<br/>
					val bytes = 0b11010010_01101001_10010100_10010010</div>

				</div>	
			</div>

		</div>

	);
}

export default Peramanent;