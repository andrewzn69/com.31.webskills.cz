import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Masthead from '@/components/ui/masthead';
import styles from './Home.module.css';
import Head from 'next/head';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>PixelForge Studios</title>
			</Head>

			<Masthead />
		</div>
	);
}
