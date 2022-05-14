import React from 'react';
import logo from '../../Assets/loose.png';
import btn from '../../Assets/btn-again.png';

const Loose = ({page, setPage}) => {
	return <>
	<div className='flex justify-center items-center h-[65vh]'>
			<div><img src={logo} alt='Rock Fest' className='w-1/2 mx-auto' /></div>
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

export default Loose