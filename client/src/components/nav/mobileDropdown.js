import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
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
			<MenuItem onClick={handleMenuClose}>
				{' '}
				<AccountCircle style={{ fontSize: 40, display: 'flex' }} />
				<a href='/profile' style={{ textDecoration: 'none', color: 'black' }}>
					&nbsp;John Doe
				</a>
			</MenuItem>

			<hr width='290px' />

			<MenuItem onClick={handleMenuClose}>
				<HomeIcon />
				<a href='/' style={{ textDecoration: 'none', color: 'black' }}>
					&nbsp;Home{' '}
				</a>
			</MenuItem>

			<MenuItem onClick={handleMenuClose}>
				<DescriptionIcon />
				<a
					href='/my_coursesINSERT_link'
					style={{ textDecoration: 'none', color: 'black' }}>
					&nbsp;My Courses
				</a>
			</MenuItem>

			<MenuItem onClick={handleMenuClose}>
				<SettingsIcon />
				<a href='/settings' style={{ textDecoration: 'none', color: 'black' }}>
					&nbsp;Settings
				</a>
			</MenuItem>

			<MenuItem onClick={handleMenuClose}>
				<ExitToAppIcon />
				<a href='/logout' style={{ textDecoration: 'none', color: 'black' }}>
					&nbsp;Log Out
				</a>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<Toolbar>
				<IconButton
					edge='start'
					className={classes.menuButton}
					aria-label='open drawer'
					onClick={handleProfileMenuOpen}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
			{renderMenu}
		</div>
	);
}
