import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
	Back: {
		alignItems: 'center',
		marginLeft: '-4%',
		justifyContent: 'center',
		[theme.breakpoints.down('lg')]: {
			height: 300,
		},
		[theme.breakpoints.up('lg')]: {
			height: 175,
		},
		[theme.breakpoints.down('md')]: {
			height: 375
		},
	},
	Text: {
		fontSize: '12px',
		marginRight: 10,
		[theme.breakpoints.down('lg')]: {
			width: '100%',
		},
		[theme.breakpoints.up('lg')]: {
			width: '4%'
		}, 
	},
	Text1: {
		fontSize: '12px',
		marginRight: 10,
		[theme.breakpoints.down('lg')]: {
			width: '100%',
		},
		[theme.breakpoints.up('lg')]: {
			width: '10%',
		}, 
	},
	Text2: {
		fontSize: '12px',
		marginRight: 10,
		[theme.breakpoints.down('lg')]: {
			width: '100%',
		},
		[theme.breakpoints.up('lg')]: {
			width: '24%',
		},
	},
	Text3: {
		fontSize: '12px',
		[theme.breakpoints.down('lg')]: {
			width: '100%',
		},
		[theme.breakpoints.up('lg')]: {
			width: '20%'
		},
        
	},
	Source: {
		fontSize: '12px',
		[theme.breakpoints.down('lg')]: {
			width: '100%',
		},
		[theme.breakpoints.up('lg')]: {
			width: '10%',
		},
	}
    
}));

function Standard(props) {
	const classes = useStyles();

	return (
		<Grid className={classes.Back}
			container
			spacing={3}
			style={{ flexDirection: 'row' }}
            
		>
			<Box className={classes.Text}>{ props.grade }</Box>
			<Box className={classes.Text1}>{ props.content }</Box>
			<Box className={classes.Text2}>{ props.subject }</Box>
			<Box className={classes.Text3}>{ props.concept }</Box>
			<Box className={classes.Text2}>{ props.competency }</Box>
			<Box className={classes.Source}><div className={classes.TextLeft}>
				{ props.source }</div></Box>
		</Grid>
	);
}

export default Standard;
