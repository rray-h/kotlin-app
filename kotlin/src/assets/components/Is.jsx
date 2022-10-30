import React from 'react';

function Is () {

	const lefta = '<';
	const righta = '>';

	const leftb = '{';
	const rightb = '}';

	return (

		<div className="main-content">
			
			<div className="main-content__container">
				<div className="main-content__body">
					
					<div className="main-content__about about">
						
						<div className="about__title">Bibendum rutrum</div>
						<div className="about__text">Используйте оператор is или его отрицание !is, чтобы проверить соответствует ли объект заданному типу во время исполнения.</div>
						<div className="about__links">
							<a href="https://kotlinlang.ru/docs/typecasts.html">https://kotlinlang.ru/docs/typecasts.html</a>
						</div>

					</div>

					<div className="main-content__code">
					f (obj is String) {leftb} <br/>
					⠀⠀⠀⠀print(obj.length)<br/>
					}<br/><br/>

					if (obj !is String) {leftb} // то же самое, что и !(obj is String) <br/>
					⠀⠀⠀⠀print("Not a String")<br/>
					}<br/>
					else {leftb}<br/>
					⠀⠀⠀⠀print(obj.length)<br/>
					}</div>

				</div>	
			</div>

		</div>

	);
}

export default Is;