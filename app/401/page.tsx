import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function UnauthorizedPage() {
	return (
		<div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
			<h1 className='text-4xl font-bold mb-4'>Error 401: Unauthorized Access</h1>
			<p className='text-xl mb-8'>For access, please login first.</p>
			<Button asChild>
				<Link href='/login'> Go to Login </Link>
			</Button>
		</div>
	);
}
