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

	return <div className='mx-auto w-[1080px] h-[1920px] bg-main flex'>
		{ pages[page] }
	</div>
}

export default App