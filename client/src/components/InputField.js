import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
	Style: {
		backgroundColor: '#FFFFFF',
	},
}));

function InputField(props) {
	const classes = useStyles();
	const { icon, customClass, ...otherProps } = props;

	return (
		<TextField
			className={`${classes.Style} ${customClass}`}
			{...otherProps}
			variant='outlined'
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>{icon}</InputAdornment>
				),
			}}
		/>
	);
}

export default InputField;
