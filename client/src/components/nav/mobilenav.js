import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './MCGlogo.png';
import MobileDropdown from './mobileDropdown';

export default function PrimarySearchAppBar() {
	const image = {
		margin: 12,
	};
	return (
		<div name='outer'>
			<AppBar name='one' position='static' float='left'>
				<Toolbar
					name='two'
					style={{
						backgroundColor: '#E5EAF5',
						justifyContent: 'space-evenly',
						display: 'flex',
						float: 'left',
					}}>
					<MobileDropdown />
					<img src={logo} alt='logo' height='43px' width='48px' style={image} />
				</Toolbar>
			</AppBar>
		</div>
	);
}
