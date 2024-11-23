'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
        });

        if (result?.error) {
            setError(result.error);
        } else {
            setError('');
            window.location.href = '/userdashboard';
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <Card className='w-[350px]'>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Enter your credentials to access your account.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <div className='grid w-full items-center gap-4'>
                            <div className='flex flex-col space-y-1.5'>
                                <Label htmlFor='username'>Username</Label>
                                <Input
                                    id='username'
                                    type='text'
                                    placeholder='Enter your username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='flex flex-col space-y-1.5'>
                                <Label htmlFor='password'>Password</Label>
                                <Input
                                    id='password'
                                    type='password'
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <p className='text-red-500'>{error}</p>}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type='submit' className='w-full'>
                            Login
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}