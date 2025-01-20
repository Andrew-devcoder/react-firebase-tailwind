import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form/Form';

export default function Registration() {
	const navigate = useNavigate();

	const loginAccount = (e) => {
		e.preventDefault()
		navigate('/login', { replace: true });
	}

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div
				className={`transition-opacity ease-in-out duration-1000 
						 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
			>
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						alt="Your Company"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
						className="mx-auto h-10 w-auto"
					/>
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						Create new account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

					<Form />

					<p className="mt-10 text-center text-sm/6 text-gray-500">
						Have an account?{' '}
						<a
							onClick={loginAccount}
							href="#"
							className="font-semibold text-indigo-600 hover:text-indigo-500"
						>
							Log in here
						</a>
					</p>

				</div>
			</div>
		</div>
	)
}


