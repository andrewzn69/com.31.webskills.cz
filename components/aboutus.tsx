import React from 'react';

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
				<div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 '>
					<div>member</div>
					<div>member</div>
					<div>member</div>
					<div>member</div>
					<div>member</div>
					<div>member</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
