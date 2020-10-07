import React from 'react';
import ReactPlayer from 'react-player'

const Player = ({url}) => {
	return (
		<div className='tc dib br1 ma2 grow bw2 shadow-5'>
			<ReactPlayer 
				width='250px' 
				height='200px' 
				url={url}
				light='https://freepngimg.com/download/chuck_norris/37468-5-chuck-norris.png'  
				playing ={true} 
				/>
		</div>
	);
}

export default Player;