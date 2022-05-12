import React, { useState } from 'react'

const Card = ({card}) => {
	return <div className='w-1/3 px-8 py-4'>
		<img src={card.img} alt='' />
	</div>
}

export default Card