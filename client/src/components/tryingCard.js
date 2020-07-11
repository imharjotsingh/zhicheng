import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
	},
});
const styles = {
	textAlign: 'left',
	fonFamily: 'Source Sans Pro',
	fontStyle: 'normal',
	fontWeight: 600,
	color: 'black',
	letterSpacing: '0.03em',
	fontSize: '14px',
};
const propStyles = {
	textAlign: 'left',
	fontFamily: 'Source Sans Pro',
	fontStyle: 'normal',
	fontWeight: 300,
	color: 'black',
	letterSpacing: '0.03em',
	fontSize: '14px',
};
let buttonColor = 'black';
export default function MediaCard(props) {
	const classes = useStyles();
	return (
		<div
			style={{ display: 'inline-block', margin: 30, height: 200, width: 300 }}
		>
			<br />

			<Card
				className={classes.root}
				elevation={5}
				square="true"
				style={{ backgroundColor: props.color }}
			>
				<CardActions style={{ float: 'right', padding: '0px' }}>
					{props.isDraft ? ( <div>
						<Button
							style={{
								backgroundColor: props.color,
								padding: 'none',
								color: 'white',
								padding: '0px',
							}}
						>
							<EditIcon fontSize="small" />
						</Button>
						<CardActionArea>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{
									marginTop: 0,
									marginBottom: 35,
									marginRight: 30,
									marginLeft: 30,
									fontFamily: 'Source Sans Pro',
									fontSize: '24px',
									fontWeight: 'bold',
									color: 'white',
									letterSpacing: ' 0.04em',
									height: '100px',
									verticalAlign: 'middle',
									display: 'inlineBlock',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								{props.subject}
							</Typography> </CardActionArea> </div>): (<CardActionArea>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{
								marginTop: 55,
								marginBottom: 35,
								marginRight: 30,
								marginLeft: 30,
								fontFamily: 'Source Sans Pro',
								fontSize: '24px',
								fontWeight: 'bold',
								color: 'white',
								letterSpacing: ' 0.04em',
								height: '100px',
								verticalAlign: 'middle',
								display: 'inlineBlock',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							{props.subject}
						</Typography> </CardActionArea>
					)}
        
					<CardActionArea>
        

						<CardContent style={{ backgroundColor: 'white', height: 200 }}>
							<div style={{ backgroundColor: 'white' }}>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
									style={styles}
								>
                Content Area:
									<Typography style={propStyles}>{props.contentArea}</Typography>
                Teaching Artist(s):
									<Typography style={propStyles}>
										{props.teachingArtists}
									</Typography>
                Age Group:
									<Typography style={propStyles}>{props.ageGroup}</Typography>
								</Typography>
							</div>
						</CardContent>
					</CardActionArea>
				</CardActions>
			</Card>
		</div>
	);
}
