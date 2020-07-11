import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
	Style: {
		backgroundColor: '#FFFFFF',
	},
	IconColor: {
		color: '#4b4c4c',
	},
}));

function ShowHidePassword(props) {
	const classes = useStyles();

	const [values, setValues] = React.useState({
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const { customClass, ...otherProps } = props;

	return (
		<TextField
			className={`${classes.Style} ${customClass}`}
			{...otherProps}
			variant='outlined'
			type={values.showPassword ? 'text' : 'password'}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<LockIcon className={classes.IconColor} />
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge='end'>
							{values.showPassword ? (
								<Visibility className={classes.IconColor} />
							) : (
								<VisibilityOff className={classes.IconColor} />
							)}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}

export default ShowHidePassword;
