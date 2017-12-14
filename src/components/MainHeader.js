import React from 'react';

const MainHeader = (props) => {
	return (
		<div>
			<ul className='navbar-header'>
				<li>React Weather App</li>
				<li>
					<input className='navbar-input' type='text' placeholder='madison, wi' />
				</li>
				<li>
					<button className='navbar-button' type='submit'>Get Weather</button>
				</li>
			</ul>
		</div>
	)
}

export default MainHeader;