const card = {
	contentArea: 'Math, Science',
	ageGroup: '9-10',
	teachingArtists: 'Ellis Brown',
	subject: 'School',
	isDraft: true,
	color: 'green',
};
const card2 = {
	contentArea: 'Cool Math, Science',
	ageGroup: '9-10',
	teachingArtists: 'Ellis Brown',
	subject: 'School',
	isDraft: false,
	color: 'red',
};
const cards = [card, card2];
const sampleData = [
	{
		contentArea: 'Computer science',
		teachingArtists: 'Mark Sheldon',
		ageGroup: 'first-years',
		isDraft: true,
		subject: 'Computer Science',
		color: 'green',
	},
	{
		contentArea: 'Computer science',
		teachingArtists: 'Matias Korman',
		ageGroup: 'first-years',
		isDraft: false,
		subject: 'Computer Science',
		color: 'red',
	},
	{
		contentArea: 'Computer science',
		teachingArtists: 'Meghan Monroe',
		ageGroup: 'second-years',
		subject: 'Computer Science',
		isDraft: true,
		color: 'black',
	},
];

const inputs = [card, card2];

module.exports = { sampleData };
