import React from 'react';
import logo from '../../Assets/win.png';
import btn from '../../Assets/btn-again.png';

const Win = ({page, setPage}) => {
	return <div className='w-full h-full flex flex-col'>
		<div className='flex flex-grow justify-center items-center'>
			<div><img src={logo} alt='Rock Fest' className='w-1/2 mx-auto' /></div>
		</div>
		<div className='flex flex-grow-0 py-64'>
			<button
				className='bg-white w-[560px] h-[150px] mx-auto rounded-2xl btn-shadow'
				onClick={() => setPage(0)}
			>
				<img src={btn} alt='Start playing' />
			</button>
		</div>
	</div>
}

export default Win