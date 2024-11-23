import Welcome from './welcome';
import ReservationSystem from './reservation-system';

export default function Dashboard() {
	// TODO: fetch username
	const username = 'Jan Novák';

	return (
		<div>
			<Welcome username={username} />
			<ReservationSystem />
		</div>
	);
}
