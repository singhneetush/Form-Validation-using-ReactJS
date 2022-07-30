import React, { useState, useEffect } from 'react';
import './App.css';
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	useNavigate,
// } from 'react-router-dom';
// import Card from './Card';

function App() {
	// const navigate = useNavigate();
	// initial state variables
	const initialValues = {
		username: '',
		email: '',
		password: '',
	};
	const [formValues, setFormValues] = useState(initialValues);

	const [formErrors, setFormErrors] = useState({});

	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		// console.log(e.target);
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues);
	};
	const handleSubmit = (e) => {
		// prevents the submit button from refreshing the page
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
	useEffect(() => {
		// console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formErrors]);


	const validate = (values) => {
		const errors = {};

		if (!values.username) {
			errors.username = 'Username is required !';
		}
		if (!values.email) {
			errors.email = 'Email is required !';
		}
		if (!values.password) {
			errors.password = 'Password is required !';
		}

		return errors;
	};

	const handleSubmitButton = () => {
		console.log(JSON.stringify(formValues, undefined, 2));
	};

	return (
		<div className='main'>
			<div className='container'>
				<form className='ui form' onSubmit={handleSubmit}>
					<h1 className='heading'>Sign in </h1>
					<div className='ui divider'></div>
					<div className='field'>
						<label>Username</label>
						<input
							type='text'
							name='username'
							placeholder='Username'
							onChange={handleChange}
							value={formValues.username}
						/>
					</div>
					<p>{formErrors.username}</p>
					<div className='field'>
						<label>Email</label>
						<input
							type='text'
							name='email'
							placeholder='email'
							onChange={handleChange}
							value={formValues.email}
						/>
					</div>
					<p>{formErrors.email}</p>
					<div className='field'>
						<label>Password</label>
						<input
							type='text'
							name='password'
							placeholder='Password'
							onChange={handleChange}
							value={formValues.password}
						/>
					</div>
					<p>{formErrors.password}</p>

					<button
						className='fluid ui button blue'
						type='submit'
						onClick={handleSubmitButton}>
						Submit
					</button>
					
				</form>
				<pre>{JSON.stringify(formValues, undefined, 2)}</pre>
			</div>
		</div>
	);
}

export default App;
