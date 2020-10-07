import React from 'react';
import ReactPlayer from 'react-player'

const Player = ({playing, onReady, url, photo}) => {
	return (
		<div className='tc dib br1 ma2 grow bw2 shadow-5'>
			<ReactPlayer 
				width='0px' 
				height='0px' 
				url={url}
				playing ={playing}
				onReady={onReady}
				/>
				<img src='https://freepngimg.com/download/chuck_norris/37468-5-chuck-norris.png'/>
		</div>

	);
}

export default Player;