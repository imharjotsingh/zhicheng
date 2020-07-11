import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dropdown from './dropdown';
import logo from './MCGlogo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},

	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
		justifyContent: 'space-evenly',
		padding: 4,
	},
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const linksStyles = {
		color: 'black',
		fontSize: 16,
		textDecoration: 'none',
		fontFamily: 'Source Sans Pro',
		marginRight: 80,
		fontStyle: 'normal',
		fontweight: 'bold',
		letterSpacing: 0.03,
	};
	const imageStyles = {
		dislpay: 'table-cell',
		verticleAlign: 'middle',
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
		</Menu>
	);

	return (
		<div name='outer' className={classes.grow}>
			<AppBar name='one' position='static'>
				<Toolbar name='two' style={{ backgroundColor: '#E5EAF5' }}>
					<a href='/'>
						<img
							src={logo}
							alt='logo'
							height='45px'
							width='45x'
							style={imageStyles}
						/>
					</a>
					<div className={classes.search}></div>
					<div className={classes.grow} />
					<Typography
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							marginTop: '40',
						}}>
						<Link style={linksStyles} to='/'>
							HOME
						</Link>
					</Typography>

					<Typography
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}>
						<Link style={linksStyles} to='/my_courses_INSERTLINK'>
							MY COURSES
						</Link>
					</Typography>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}>
						<AccountCircle style={{ fontSize: 30, color: 'black' }} />
					</div>
					<Dropdown />
				</Toolbar>
			</AppBar>
		</div>
	);
}
