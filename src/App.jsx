import React, { useState } from 'react';
import Home from './Components/Pages/Home';
import Game from './Components/Pages/Game';
import Win from './Components/Pages/Win';
import Loose from './Components/Pages/Loose';

const App = () => {

	const [page, setPage] = useState(0);

	const pages = [
		<Home page={page} setPage={setPage} />,
		<Game page={page} setPage={setPage} />,
		<Win page={page} setPage={setPage} />,
		<Loose page={page} setPage={setPage} />
	];

	return <>
		<div className='portrait w-full h-full flex flex-col'>
			{ pages[page] }
		</div>
		<div className='landscape w-full h-full text-xl text-shadow-lg flex justify-center items-center'>
			Esta app funciona solamente en formato vertical
		</div>
	</>
}

export default App