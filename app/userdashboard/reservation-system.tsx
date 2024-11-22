'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

type ReservationType = 'Gold' | 'Silver' | 'Bronze' | null;

export default function ReservationSystem() {
	const [selectedReservation, setSelectedReservation] = useState<ReservationType>(null);
	const [currentReservation, setCurrentReservation] = useState<ReservationType>(null);

	useEffect(() => {
		// TODO: fetch current reservation
		setCurrentReservation(null);
	}, []);

	const handleReservation = () => {
		if (selectedReservation) {
			// TODO: send to server
			setCurrentReservation(selectedReservation);
			toast({
				title: 'Reservation Successful',
				description: 'You have been logged into ${selectedReservation} phase of testing',
			});
			// TODO: send confirmation email
		}
	};

	return (
		<div className='bg-white shadow rounded-lg p-6'>
			<h2 className='text-2xl font-semibold mb-4'>Rezervační systém</h2>
			<RadioGroup
				value={selectedReservation || ''}
				onValueChange={(value) => setSelectedReservation(value as ReservationType)}
			>
				<div className='flex items-center space-x-2 mb-2'>
					<RadioGroupItem value='Gold' id='gold' />
					<Label htmlFor='gold'>Gold: První fáze testování</Label>
				</div>
				<div className='flex items-center space-x-2 mb-2'>
					<RadioGroupItem value='Silver' id='silver' />
					<Label htmlFor='silver'>Silver: Druhá fáze testování</Label>
				</div>
				<div className='flex items-center space-x-2 mb-4'>
					<RadioGroupItem value='Bronze' id='bronze' />
					<Label htmlFor='bronze'>Bronze: Třetí fáze testování</Label>
				</div>
			</RadioGroup>
			<Button onClick={handleReservation} disabled={!selectedReservation}>
				Rezervovat
			</Button>
			{currentReservation && (
				<p className='mt-4 text-green-600'>
					Aktuálně jste přihlášeni do {currentReservation} fáze testování.
				</p>
			)}
		</div>
	);
}
