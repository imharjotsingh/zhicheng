import React from 'react';
import Card from '../components/Card';

function makeCard() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Card
				contentArea={'Math, Science'}
				teachingArtists={'Ellis Brown'}
				ageGroup={'8-10'}
				subject={'Math'}
				color={'Blue'}
			/>
			<Card
				contentArea={'Math, Science'}
				teachingArtists={'Ellis Brown'}
				ageGroup={'8-10'}
				subject={'Photography, Philosophy'}
				color={'Red'}
			/>
			<Card
				contentArea={'Math, Science'}
				teachingArtists={'Ellis Brown'}
				ageGroup={'8-10'}
				subject={'Math'}
				color={'Orange'}
			/>
			<Card
				contentArea={'Math, Science'}
				teachingArtists={
					'Ellis Brown, Sam Baker, Seth Heye-Smith, YuanYuan Du, Kevin Zhang'
				}
				ageGroup={'8-10'}
				subject={'Photography, Philosophy'}
				color={'Green'}
			/>
		</div>
	);
}
export default makeCard;
