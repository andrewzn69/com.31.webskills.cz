'use client';

import React, { useRef, useContext, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ScrollContext } from '@/utils/scroll-observer';

const Masthead: React.FC = () => {
	const refContainer = useRef<HTMLDivElement>(null);
	const { scrollY } = useContext(ScrollContext);

	const [countdown, setCountdown] = useState('');
	const targetDate = new Date('2024-12-31T00:00:00');

	useEffect(() => {
		const updateCountdown = () => {
			const now = new Date();
			const difference = targetDate.getTime() - now.getTime();

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((difference / 1000 / 60) % 60);
				const seconds = Math.floor((difference / 1000) % 60);
				setCountdown(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
			} else {
				setCountdown('Released!');
			}
		};

		const interval = setInterval(updateCountdown, 1000);
		updateCountdown();

		return () => clearInterval(interval);
	}, [targetDate]);

	let progress = 0;

	const { current: elContainer } = refContainer;
	if (elContainer) {
		progress = Math.min(1, scrollY / elContainer.clientHeight);
	}

	const dateObj = new Date();
	const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
	const day = dateObj.getDate();
	const month = dateObj.toLocaleDateString('en-US', { month: 'long' });
	const year = dateObj.getFullYear();
	const currentDate = `It's ${dayOfWeek}, ${day}. ${month} ${year}`;

	return (
		<div
			ref={refContainer}
			className='min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10'
			style={{ transform: `translateY(-${progress * 20}vh)` }}
		>
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
			<div className='p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
				<h1 className='my-9 text-4xl xl:text-5xl'>PixelForge Studios</h1>
				<h2 className='text-2xl xl:text-3xl tracking-tight'>
					<span>Making games</span> <span>with grit</span>
				</h2>
			</div>
			<div className='font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 md:pb-10 transition-all duration-1000 relative'>
				<p className='mt-1 text-lg'>{currentDate}</p>
				<p className='mt-3 text-2xl xl:text-3xl'>Game release in: {countdown}</p>
			</div>
			<div className='flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 relative'>
				<Image src='/arrow-down.png' alt='Arrow down' width={188 / 3} height={105 / 3} />
			</div>
		</div>
	);
};

export default Masthead;
