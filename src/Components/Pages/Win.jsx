import React from 'react';
import logo from '../../Assets/win.png';
import btn from '../../Assets/btn-again.png';

const Win = ({page, setPage}) => {
	return <>
		<div className='flex justify-center items-center h-[65vh]'>
			<div>
				<img src={logo} alt='Rock Fest' className='w-1/2 mx-auto' />
				<p className='mt-12 text-base md:text-5xl text-center text-shadow-lg'>YOU WIN A BEER!!!!</p>
			</div>
		</div>
		<div className='flex justify-center items-center h-[35vh]'>
			<button
				className='bg-white w-1/2 h-auto mx-auto rounded-2xl btn-shadow'
				onClick={() => setPage(0)}
			>
				<img src={btn} alt='Start playing' />
			</button>
		</div>
	</>
}

export default Win