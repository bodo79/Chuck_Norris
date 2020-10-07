import React from 'react';
import ReactPlayer from 'react-player'

const Player = ({playing, onReady, url}) => {
	return (
		<div className='tc dib br1 ma2 grow bw2 shadow-5'>
			<ReactPlayer 
				width='250px' 
				height='250px' 
				url={url}
				playing
				onReady={onReady}
				light='https://freepngimg.com/download/chuck_norris/37468-5-chuck-norris.png'/>
			/>
		</div>

	);
}

export default Player;