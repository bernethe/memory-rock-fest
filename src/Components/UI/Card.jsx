import React, { useState, useEffect } from 'react';
import backCard from '../../Assets/card-back.png';

const Card = ({card, flipped, setFlipped, isClickable, pairs}) => {

	const [isTurned, setIsTurned] = useState(false);
	const [classFlip, setClassFlip] = useState('');

	

	useEffect(() => {
		if(pairs.includes(card.pair) || flipped[0]?.id === card.id || flipped[1]?.id === card.id) {
			setClassFlip('flip-card-open');
		} else {
			setClassFlip('');
			setIsTurned(false);
		}
		// console.log(flipped[0]?.id, flipped[1]?.id);
	}, [pairs, flipped]);

	const handleClick = () => {
		if(isClickable && !isTurned) {
			setIsTurned(!isTurned);
			setClassFlip('flip-card-open');
			setFlipped([...flipped, card]);
		}
	}

	return <button className={ `w-1/3 aspect-square px-1 py-4 md:px-8 flip-card ${ classFlip }` } onClick={ handleClick }>
		<div className="flip-card-inner">
			<div className="flip-card-front">
				<img src={ backCard } alt='' />
			</div>
			<div className="flip-card-back">
				<img src={ card.img } alt='' />
			</div>
		</div>
	</button>
}

export default Card