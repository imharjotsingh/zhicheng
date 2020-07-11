import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		h1: {
			fontSize: 36,
			fontFamily: 'Noto Sans',
			fontStyle: 'normal',
			fontWeight: 'normal',
			color: '#2D3142',
		},
		h3: {
			fontSize: 24,
			fontFamily: 'Noto Sans',
			fontStyle: 'normal',
			fontWeight: 'normal',
			color: '#2D3142',
		},
		h4: {
			fontSize: 18,
			fontFamily: 'Noto Sans',
			fontStyle: 'normal',
			fontWeight: 'normal',
			color: '#2D3142',
		},
		button: {
			color: '#FFFFFF',
			backgroundColor: '#7261EE',
			borderRadius: 5,
			height: 55,
			fontSize: 24,
			'&:hover': {
				boxShadow:
					'0 12px 16px 0 rgba(0, 0, 0, 0.24) 0 17px 50px 0 rgba(0, 0, 0, 0.19)',
			},
		},
	},
	MuiButtonBase: {
		color: 'white',
	},
});

export default theme;
