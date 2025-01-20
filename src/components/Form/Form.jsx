import { useState } from "react";
import { InputField } from "../Input/InputField";
import { resetFormFields, submitForm, updateFormField } from "../../redux/actions/formActions";
import { useSelector } from "react-redux";

export const Form = ({ onSubmit }) => {
	const [loading, setLoading] = useState(false)
	// const formData = useSelector((state) => state.form.formData);

	const handleReset = () => {
		resetFormFields();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		// await onSubmit(formData);
		await submitForm()
		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6" >

			<InputField
				label="Name"
				name="name"
				maxLength={30}
				required={true}
			/>

			<InputField
				label="Email address"
				name="email"
				maxLength={30}
				required={true}
			/>

			<InputField
				label="Password"
				name="password"
				type="password"
				maxLength={30}
				required={true}
				autoComplete='new-password'
			/>

			<InputField
				label="Confirm Password"
				name="confirmPassword"
				type="password"
				maxLength={30}
				required={true}
			/>

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


