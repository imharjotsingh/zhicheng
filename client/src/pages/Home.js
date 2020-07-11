//Ellis Brown 7/1/2020
//Responsive Home page
import React from 'react';
import Navbar from '../components/nav/nav';
import welcomeImage from './home_image.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Home() {
	const buttonStyle = {
		display: 'block',
		marginTop: '20px',
		marginBottom: '0px',
		backgroundColor: '#0069AA',
		width: '95%',
		height: '66px',
		color: 'white',
		fontSize: '18px',
		textTransform: 'none',
	};
	return (
		<div>
			<Navbar />
			<div style={{ alignItems: 'center', padding: '70px 0px' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						maxHeight: '700px',
						margin: 24,
						posistion: 'relative',
					}}>
					<Grid
						container
						spacing={3}
						style={{ flexDirection: 'row', maxHeight: 700, maxWidth: 1000 }}>
						<Grid item xs={12} md={6}>
							<img
								src={welcomeImage}
								alt='welcome'
								style={{ maxWidth: '100%', maxHeight: '100%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							style={{ textAlign: 'left', display: 'block' }}>
							<Typography
								style={{
									fontFamily: 'Open Sans',
									fontSize: 36,
									fontWeight: 600,
									lineHeight: 1.1,
									marginBottom: '10px',
								}}>
								MCG COURSE OVERVIEW
							</Typography>
							<Typography
								style={{
									fontFamily: 'Open Sans',
									fontSize: 30,
									fontWeight: 100,
									lineHeight: 1.1,
									marginBottom: '30px',
								}}>
								Get Started
							</Typography>
							<Button style={buttonStyle}>Build From Existing Course</Button>
							<Button style={buttonStyle}>Create New Course</Button>
							<Button
								style={{
									display: 'block',
									marginTop: '20px',
									marginBottom: '20px',
									backgroundColor: '#2D3142',
									width: '95%',
									height: '66px',
									color: 'white',
									textTransform: 'none',
									fontSize: '18px',
								}}>
								See My Courses
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default Home;
