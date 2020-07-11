import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileNav from './mobilenav';
import DesktopNav from './desktopnav'

export default function SimpleMediaQuery() {
	const matches = useMediaQuery('(min-width:650px)');

	return matches ? <DesktopNav /> : <MobileNav />;
}