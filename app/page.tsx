import Image from 'next/image';
import Masthead from '@/components/masthead';
import AboutUs from '@/components/aboutus';
import styles from './Home.module.css';
import Head from 'next/head';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>PixelForge Studios</title>
			</Head>

			<Masthead />
			<AboutUs />
		</div>
	);
}
