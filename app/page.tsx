import Image from 'next/image';
import Masthead from '@/components/masthead';
import AboutUs from '@/components/aboutus';
import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>PixelForge Studios</title>
			</Head>

			<Masthead />
			<AboutUs />
		</div>
	);
}
