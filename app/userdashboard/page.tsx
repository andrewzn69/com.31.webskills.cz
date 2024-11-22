import Welcome from './welcome';
import ReservationSystem from './reservation-system';

export default function Dashboard() {
	// TODO: fetch username
	const username = 'John Doe';

	return (
		<div>
			<Welcome username={username} />
			<ReservationSystem />
		</div>
	);
}
