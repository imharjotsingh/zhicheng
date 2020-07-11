import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import logo from './mcg_logo.png';
import Box from '@material-ui/core/Box';
import InputField from '../components/InputField';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { useForm } from 'react-hook-form';
import { DevTool } from 'react-hook-form-devtools';

/* styles */
const useStyles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: '0 40px',
		},
		[theme.breakpoints.up('sm')]: {
			padding: '0 60px',
		},
	},
	logo: {
		position: 'absolute',
		width: '96px',
		height: '86px',
		left: '50%',
		transform: 'translate(-50%)',
		top: '30px',
	},
	paper: {
		position: 'absolute',
		left: '50%',
		transform: 'translate(-50%)',
		height: '515px',
		[theme.breakpoints.down('sm')]: {
			width: '320px',
			marginTop: '150px',
		},
		[theme.breakpoints.up('sm')]: {
			width: '400px',
			marginTop: '190px',
		},
		backgroundColor: '#f9fbfd',
	},
	button: {
		backgroundColor: 'orange',
		color: 'white',
		fontWeight: 'bold',
		height: '55.39px',
		fontSize: '18px',
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '23px',
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: '28px',
		},
		margin: '32px',
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: '15px',
		fontWeight: 'normal',
	},
	HyperColor: {
		color: '#ff9d00',
		fontWeight: 'bold',
	},
	forget: {
		width: '100%',
		textAlign: 'right',
		marginTop: '15px',
	},
	InputField: {
		marginBottom: '30px',
	},
	InputFieldEmail: {
		marginBottom: '20px',
	},
	IconColor: {
		color: '#4b4c4c',
	},
	error: {
		color: '#c72f24',
	},
	format: {
		fontSize: '12px',
		color: '#f7991b',
	},
}));

function Register() {
	const { register, handleSubmit, control, getValues } = useForm({
		defaultValues: {
			email: '',
			password: '',
			password2: '',
		},
	});

	const classes = useStyles();
	const [errorMessage, seterrorMessage] = useState('');

	async function communicationAPI(data) {
		console.log(JSON.stringify(data));
		const res = await fetch('/api/user/register', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const msg = await res.text();

		if (res.status === 400) seterrorMessage(msg);

		console.log(res);
	}

	return (
		<Box>
			<DevTool control={control} />
			{/* mcg logo */}
			<img className={classes.logo} src={logo} alt='mcg logo' />
			<Paper className={classes.paper} elevation={4}>
				<div className={classes.container}>
					<div className={classes.title}>
						Welcome!
						<div className={classes.subtitle}>Create an account</div>
					</div>
					<form onSubmit={handleSubmit(communicationAPI)}>
						{/* email input */}
						<InputField
							className={classes.InputFieldEmail}
							icon={<EmailIcon className={classes.IconColor} />}
							type='email'
							placeholder='Email'
							name='email'
							inputRef={register()}
							fullWidth
						/>

						<div className={classes.format}>
							Must contain uppercase, lowercase, and a number{' '}
						</div>

						{/* password input */}
						<InputField
							className={classes.InputField}
							icon={<LockIcon className={classes.IconColor} />}
							type='password'
							placeholder='Password'
							name='password'
							inputRef={register()}
							fullWidth
						/>

						{/* re-enter password */}
						<InputField
							className={classes.InputField}
							icon={<LockIcon className={classes.IconColor} />}
							type='password'
							placeholder='re-enter Password'
							name='password2'
							inputRef={register()}
							fullWidth
						/>

						{<div className={classes.error}>{errorMessage}</div>}

						{/* login button */}
						<p>
							<Button
								type='submit'
								className={classes.button}
								id='register_button'
								fullWidth>
								REGISTER
							</Button>
						</p>
					</form>
					Already have an account? <a href=''>Log in</a>
				</div>
			</Paper>
		</Box>
	);
}

export default Register;
