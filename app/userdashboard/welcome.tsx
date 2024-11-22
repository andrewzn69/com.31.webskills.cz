export default function Welcome({ username }: { username: string }) {
	return (
		<div className='bg-white shadow rounded-lg p-6 mb-6'>
			<h2 className='text-2xl font-semibold mb-2'>
				Welcome, <span className='text-blue-500'>{username}</span>
			</h2>
			<p>
				You are logged in to your user panel. Here you can manage your reservations and gain access to
				beta testing.
			</p>
		</div>
	);
}
