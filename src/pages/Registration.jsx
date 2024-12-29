import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registrationUser } from '../firebase/services/authService'
import { saveUserData } from '../firebase/services/userService';

export default function Registration() {

	const [user, setUser] = useState({
		email: '',
		name: '',
		password: '',
		confirmPassword: '',
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	useEffect(() => {
		console.log(user)
	}, [user])

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newUserUid = await registrationUser(user.email, user.password);
		const dataNewUser = await saveUserData(newUserUid, user)
		console.log(dataNewUser)

		if (dataNewUser) {
			console.log(dataNewUser)
			navigate('/login', { replace: true });
		}
	};

	const loginAccount = (e) => {
		e.preventDefault()
		navigate('/login', { replace: true });
	}


	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<>
			{/*
		  This example requires updating your template:
  
		  ```
		  <html class="h-full bg-white">
		  <body class="h-full">
		  ```
		*/}
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
						<form action="#" method="POST" className="space-y-6">
							<div>
								<label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
									Email address
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										value={user.email}
										onChange={handleChange}
										required
										autoComplete="email"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
									Name
								</label>
								<div className="mt-2">
									<input
										id="name"
										name="name"
										type="name"
										value={user.name}
										onChange={handleChange}
										required
										autoComplete="name"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
										Password
									</label>
								</div>
								<div className="mt-2 mb-2">
									<input
										id="password"
										name="password"
										type="password"
										value={user.password}
										onChange={handleChange}
										required
										autoComplete="new-password"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
								<div className="flex items-center justify-between">
									<label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
										Confirm Password
									</label>
								</div>
								<div className="mt-2">
									<input
										// id="confirm-password"
										name="confirmPassword"
										type="password"
										value={user.confirmPassword}
										onChange={handleChange}
										required
										autoComplete="new-password"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
							</div>


							<div>
								<button
									onClick={handleSubmit}
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Registration
								</button>
							</div>
						</form>

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
		</>
	)
}


