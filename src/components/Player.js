import React from 'react';
import ReactPlayer from 'react-player'

const Player = ({playing, onReady, url}) => {
	return (
		<div className='tc dib br1 ma2 grow bw2 shadow-5'>
			<ReactPlayer 
				width='100px' 
				height='100px' 
				url={url}
				playing
				onReady={onReady}
			/>
		</div>

	);
}

export default Player;