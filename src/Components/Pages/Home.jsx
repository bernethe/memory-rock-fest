import React from 'react';
import logo from '../../Assets/tp.svg';
import btn from '../../Assets/btn-start.png';

const Home = ({page, setPage}) => {
	return <>
		<div className='flex justify-center items-center w-2/3 mx-auto h-[65vh]'>
			<img src={logo} alt='Rock Fest' className='w-full h-auto' />
		</div>
		<div className='flex justify-center items-center h-[35vh]'>
			<div className='text-center text-pink-600 '>
				<button
					className='bg-white w-1/2 h-auto mx-auto rounded-2xl btn-shadow'
					onClick={() => setPage(1)}
				>
					<img src={btn} alt='Start playing' />
				</button>
				<p className='mt-4 text-xl'>Regálanos tus datos</p>
			</div>
		</div>
	</>
}

export default Home