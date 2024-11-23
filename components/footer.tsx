import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-12'>
			<div className='container mx-auto px-11'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-2xl font-bold mb-4'>PixelForge Studios</h3>
						<p>Tvoříme hry s odhodláním.</p>
					</div>
					<div>
						<h4 className='text-xl font-semibold mb-4'>Kontakt</h4>
						<p>Email: info@pixelforgestudios.cz</p>
						<p>Telefon: +420 123 456 789</p>
						<p>Adresa: Herní ulice 123, 123 45 Praha</p>
					</div>
					<div>
						<h4 className='text-xl font-semibold mb-4'>Sledujte nás</h4>
						<div className='flex space-x-4'>
							<Link href='#' className='hover:text-gray-300'>
								<Facebook />
							</Link>
							<Link href='#' className='hover:text-gray-300'>
								<Twitter />
							</Link>
							<Link href='#' className='hover:text-gray-300'>
								<Instagram />
							</Link>
							<Link href='#' className='hover:text-gray-300'>
								<Linkedin />
							</Link>
						</div>
					</div>
				</div>
				<div className='mt-8 text-center'>
					<p>&copy; {new Date().getFullYear()} PixelForge Studios. Všechna práva vyhrazena.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
