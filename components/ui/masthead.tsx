import React from 'react';
import Image from 'next/image';

const Masthead = () => {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center'>
			<Image
				src='/studio.jpg'
				alt='Studio background'
				className='absolute w-full h-full object-cover'
				width={1920}
				height={1080}
			/>
			<div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
				<Image src='/logo.png' width={128 / 3} height={128 / 3} alt='logo' className='absolute' />
			</div>
			<div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
				<h1 className='mb-6 text-4xl xl:text-5xl'>PixelForge Studios</h1>
				<h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
					<span>Making games</span> <span>with grit</span>
				</h2>
			</div>
			<div className=' flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 relative'>
				<Image src='/arrow-down.png' alt='Arrow down' width={188 / 3} height={105 / 3} />
			</div>
		</div>
	);
};

export default Masthead;
