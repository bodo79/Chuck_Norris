import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '3px solid black', height: '260px'}}>
			{ props.children }
			<img src='https://freepngimg.com/download/chuck_norris/37468-5-chuck-norris.png'/>
		</div>
	);
};

export default Scroll;