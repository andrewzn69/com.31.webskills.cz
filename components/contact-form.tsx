import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
	return (
		<section className='bg-white py-20'>
			<div className='container mx-auto px-11'>
				<h2 className='text-4xl font-bold text-center mb-10'>Kontaktujte nás</h2>
				<form className='max-w-2xl mx-auto space-y-6'>
					<div>
						<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
							Jméno
						</label>
						<Input type='text' id='name' name='name' required className='mt-1' />
					</div>
					<div>
						<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
							Email
						</label>
						<Input type='email' id='email' name='email' required className='mt-1' />
					</div>
					<div>
						<label htmlFor='message' className='block text-sm font-medium text-gray-700'>
							Zpráva
						</label>
						<Textarea id='message' name='message' rows={4} required className='mt-1' />
					</div>
					<Button type='submit' className='w-full'>
						Odeslat
					</Button>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
