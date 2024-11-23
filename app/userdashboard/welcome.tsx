export default function Welcome({ username }: { username: string }) {
	return (
		<div className='bg-white shadow rounded-lg p-6 mb-6'>
			<h2 className='text-2xl font-semibold mb-2'>
				Vítejte, <span className='text-blue-500'>{username}</span>
			</h2>
			<p>
				Jste přihlášeni do svého uživatelského panelu. Zde můžete spravovat své rezervace a získat
				přístup k beta testování.
			</p>
		</div>
	);
}
