import React from 'react';

const JokeCard = ({ joke }) => {
	return (
		<div className='tc bg-light-green dib br1 ma2 grow bw2 shadow-5'>
			<img alt='' src={joke.icon_url}/>
			<h4>{joke.value}</h4>
		</div>
	);
}

export default JokeCard;
