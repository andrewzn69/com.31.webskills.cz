import React from 'react';
import Image from 'next/image';

const GameplayShowcase = () => {
	return (
		<section className='flex flex-col bg-gray-100 py-20'>
			<div className='container mx-auto px-11'>
				<h2 className='text-4xl font-bold text-center mb-10'>Gameplay Showcase</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div key={i} className='relative h-64 overflow-hidden rounded-lg shadow-md'>
							<Image
								src={`/gameplay/screenshot_${i}.jpg`}
								alt={`Gameplay screenshot ${i}`}
								layout='fill'
								objectFit='cover'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default GameplayShowcase;
