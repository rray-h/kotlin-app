import React from 'react';

function Content () {

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
						<div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis magna, sodales sit amet lacus at, faucibus dictum mi. Aenean fringilla arcu ac consequat ullamcorper. Etiam quis lectus congue, venenatis quam non, eleifend metus. Donec velit felis, luctus ut cursus sit amet, mattis in dui. Fusce vestibulum congue justo bibendum rutrum. Nunc placerat sollicitudin nulla, vitae imperdiet nunc pretium at. Duis sem nisl, pellentesque eget efficitur et, fringilla quis lacus. Cras tortor diam, congue in metus at, condimentum placerat ligula. Nunc euismod sodales laoreet. Vestibulum molestie efficitur erat a interdum. Aliquam fermentum urna arcu, a volutpat magna lobortis at. Nam interdum fermentum diam semper dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc scelerisque vel risus vel euismod. Fusce nisl magna, pellentesque vitae convallis non, aliquam eu ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac feugiat dui. Nam nec finibus purus, ut hendrerit est. </div>
						<div className="about__links">
							<a href="#">https://img4.goodfon.ru/original/2560x1600/1/b3/shchenki-korgi-milye.jpg</a> <br />
							<a href="#">https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>
						</div>

					</div>

					<div className="main-content__code"></div>

				</div>	
			</div>

		</div>

	);
}

export default Content;