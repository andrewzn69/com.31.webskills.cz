import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';

const isAuthenticated = () => {
	return true;
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
	if (!isAuthenticated()) {
		redirect('/401');
	}

	const handleLogout = () => {
		console.log('User logged out');
		window.location.href = '/';
	};

	return (
		<div className='min-h-screen bg-gray-100'>
			<header className='bg-white shadow'>
				<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
					<h1 className='text-3xl font-bold text-gray-900'>User Dashboard</h1>
					<Button onClick={handleLogout}>Logout</Button>
				</div>
			</header>
			<main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>{children}</main>
		</div>
	);
}
