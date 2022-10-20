import React from 'react';

function BooleanType () {
	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Логический тип</div>
						<div className="about__text">Тип Boolean представляет логический тип данных и принимает два значения: true и false.
							При необходимости использования nullable-ссылок логические переменные оборачиваются Boolean?.
							Встроенные действия над логическими переменными включают(Пример):<br/>
								|| – ленивое логическое ИЛИ<br/>
								&& – ленивое логическое И<br/>
								! – отрицание</div>
						<div className="about__links">
							<a href="https://kotlins.org/boolean-comparison-operators">https://kotlins.org/boolean-comparison-operators</a> <br />
						</div>

					</div>

					<div className="main-content__code">
					val myTrue: Boolean = true <br/>
					val myFalse: Boolean = false <br/>
					val boolNull: Boolean? = null <br/> <br/>

					println(myTrue || myFalse) <br/>
					println(myTrue && myFalse) <br/> 
					println(!myTrue)</div>

				</div>	
			</div>

		</div>

	);
}

export default BooleanType;