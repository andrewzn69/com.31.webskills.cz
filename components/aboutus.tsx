import React from 'react';
import Member from '@/components/member';

const AboutUs = () => {
	return (
		<section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
			<div className='container mx-auto px-11'>
				<p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
					<strong>We are passionate team of innovators, artists, and storytellers. </strong>
					Our team is dedicated to craft immersive gaming experiences that inspire and entertain.
				</p>
			</div>
			<div className='container mx-auto px-11 text-center mt-28'>
				<h2>Our Team</h2>
				<div className='my-2'>the "heart of the company"</div>
				<div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
					<Member id='1' name='Luke' socialId='@luke' link='#' />
					<Member id='1' name='Mark' socialId='@mark' link='#' />
					<Member id='1' name='James' socialId='@james' link='#' />
					<Member id='1' name='John' socialId='@johnpork' link='#' />
					<Member id='1' name='Andrew' socialId='@andrew' link='#' />
					<Member id='1' name='Thomas' socialId='@thomas' link='#' />
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
