import { useState } from "react";

export const Form = ({ onSubmit }) => {

	const [user, setUser] = useState({
		email: '',
		name: '',
		password: '',
		confirmPassword: '',
	});

	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		await onSubmit(user);
		setLoading(false);
	};

	return (
		<form onSubmit={handleFormSubmit} action="#" method="POST" className="space-y-6">
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
						disabled={loading}
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
						disabled={loading}
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
						disabled={loading}
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
						disabled={loading}
						autoComplete="new-password"
						className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading}
					className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					{loading ? (
						<div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
					) : (
						'Registration'
					)}

				</button>
			</div>
		</form>
	)
}


