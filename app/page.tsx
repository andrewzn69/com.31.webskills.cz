import Image from 'next/image';
import Masthead from '@/components/masthead';
import AboutUs from '@/components/aboutus';
import Head from 'next/head';
import GameplayShowcase from '@/components/gameplay-showcase';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';

export default function Home() {
	return (
		<div>
			<Head>
				<title>PixelForge Studios</title>
			</Head>

			<Masthead />
			<AboutUs />
			<GameplayShowcase />
			<ContactForm />
			<Footer />
		</div>
	);
}
