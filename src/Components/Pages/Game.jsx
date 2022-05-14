import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import logo from '../../Assets/logo.png';
import btn from '../../Assets/btn-restart.png';
import Card01En from '../../Assets/card-1-en.png';
import Card02En from '../../Assets/card-2-en.png';
import Card03En from '../../Assets/card-3-en.png';
import Card04En from '../../Assets/card-4-en.png';
import Card05En from '../../Assets/card-5-en.png';
import Card01Es from '../../Assets/card-1-es.png';
import Card02Es from '../../Assets/card-2-es.png';
import Card03Es from '../../Assets/card-3-es.png';
import Card04Es from '../../Assets/card-4-es.png';
import Card05Es from '../../Assets/card-5-es.png';
import RightSFX from '../../Assets/right.mp3';
import WrongSFX from '../../Assets/wrong.mp3';

const Game = ({page, setPage}) => {

	const MAX_MOVES = 6;
	const MAX_PAIRS = 3;
	const TIMER_INTERVAL = 5000;
	const RIGHT_SFX = new Audio(RightSFX);
	const WRONG_SFX = new Audio(WrongSFX);

	let myTimer = null;

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	let cards = [
		{ id: 1, img: Card01En, pair: 1 },
		{ id: 2, img: Card01Es, pair: 1 },
		{ id: 3, img: Card02En, pair: 2 },
		{ id: 4, img: Card02Es, pair: 2 },
		{ id: 5, img: Card03En, pair: 3 },
		{ id: 6, img: Card03Es, pair: 3 },
		{ id: 7, img: Card04En, pair: 4 },
		{ id: 8, img: Card04Es, pair: 4 },
		{ id: 9, img: Card05En, pair: 5 },
		{ id: 10, img: Card05Es, pair: 5 }
	];

	const [moves, setMoves] = useState(0);
	const [pairs, setPairs] = useState([]);
	const [flipped, setFlipped] = useState([]);
	const [isClickable, setIsClickable] = useState(true);
	const [myCards, setMyCards] = useState([]);

	useEffect(() => {
		setMyCards(shuffleArray(cards));
	}, []);

	useEffect(() => {
		if(flipped.length === 2) {
			setIsClickable(false);
			setMoves(moves + 1);
			clearTimeout(myTimer);
			if(flipped[0].pair === flipped[1].pair) {
				setPairs([...pairs, flipped[0].pair]);
				RIGHT_SFX.play();
				setFlipped([]);
				setIsClickable(true);
			} else {
				WRONG_SFX.play();
				myTimer = setTimeout(() => {
					setFlipped([]);
					setIsClickable(true);
				}, TIMER_INTERVAL);
			}
		}
	}, [flipped]);


	useEffect(() => {
		// console.log(pairs.length, MAX_PAIRS);
		if(pairs.length === MAX_PAIRS) {
			clearTimeout(myTimer);
			myTimer = setTimeout(() => {
				setPage(2);
			}, TIMER_INTERVAL);
		} else if(moves === MAX_MOVES) {
			clearTimeout(myTimer);
			myTimer = setTimeout(() => {
				setPage(3);
			}, TIMER_INTERVAL);
		}
	}, [pairs, moves]);

	return <>
		{/* <div className='flex justify-center items-center h-[15vh]'>
			<div><img src={logo} alt='Rock Fest' className='w-1/6 mx-auto' /></div>
		</div> */}
		<div className='flex flex-wrap justify-center items-center h-[90vh]'>
			{
				myCards.map((card, index) => {
					return <Card key={index} card={card} flipped={flipped} setFlipped={setFlipped} isClickable={isClickable} pairs={pairs} />
				})
			}
		</div>
		<div className='flex justify-center items-center h-[10vh]'>
			<div className='flex w-1/2 flex-col text-pink-600 text-sm md:text-3xl px-4'>
				<p>Movimientos: {moves} de {MAX_MOVES}</p>
				<p>Parejas: {pairs.length} de {MAX_PAIRS}</p>
			</div>
			<div className='flex w-1/2 px-12'>
				<button
					className='bg-white w-full h-auto mx-auto rounded-2xl btn-shadow'
					onClick={() => setPage(0)}
				>
					<img src={btn} alt='Restart' />
				</button>
			</div>
		</div>
	</>
}

export default Game