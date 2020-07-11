import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	paper: {
		marginRight: theme.spacing(2),
	},
}));

const MenuListComposition = (props) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const buttonStyles = {
		color: 'black',
		fontSize: 16,
		textDecoration: 'none',
		fontFamily: 'Source Sans Pro',
		fontStyle: 'normal',
		fontWeight: 'normal',
		letterSpacing: 0.03,
		background: '#E5EAF5',
		textTransform: 'none',
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) return;

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) anchorRef.current.focus();

		prevOpen.current = open;
	}, [open]);

	return (
		<div className={classes.root}>
			<div>
				<Button
					ref={anchorRef}
					aria-controls={open ? 'menu-list-grow' : undefined}
					aria-haspopup='true'
					onClick={handleToggle}
					style={buttonStyles}>
					{props.name}
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					transition
					disablePortal>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === 'bottom' ? 'center top' : 'center bottom',
							}}>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id='menu-list-grow'
										onKeyDown={handleListKeyDown}>
										<MenuItem onClick={handleClose}>
											<AccountCircleIcon />
											<a
												href='/profile_INSERT_LINK'
												style={{
													textDecoration: 'none',
													color: 'black',
													fontSize: '14px',
												}}>
												&nbsp;&nbsp;Profile
											</a>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<SettingsIcon />
											<a
												href='/settings_INSERT_LINK'
												style={{
													textDecoration: 'none',
													color: 'black',
													fontSize: '14px',
												}}>
												&nbsp;&nbsp;Settings
											</a>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<ExitToAppIcon />
											<a
												href='/logout_INSERT_LINK'
												style={{
													textDecoration: 'none',
													color: 'black',
													fontSize: '14px',
												}}>
												&nbsp;&nbsp;Logout
											</a>
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</div>
	);
};
MenuListComposition.props = {
	name: PropTypes.string,
};
MenuListComposition.defaultProps = {
	name: 'John Doe',
};
export default MenuListComposition;
