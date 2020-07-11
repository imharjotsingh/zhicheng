import React, { useState } from 'react';
import Navbar from '../components/nav/nav';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '../components/Card';
import AppBar from '@material-ui/core/AppBar';

function DoStuff(props: any) {
	interface Course {
		contentArea: string;
		ageGroup: string;
		teachingArtists: string;
		subject: string;
		isDraft: boolean;
		color: string;
	}
	interface Props {
		courses: Course[];
	}

	const [selectedTab, setSelectedTab] = useState(0);
	const [filteredCourses, setFilteredCourses] = useState(props.courses);
	const handleChange = (event: any, newValue: any) => {
		setSelectedTab(newValue);
		if (newValue === 1) {
			setFilteredCourses(
				props.courses.filter((course: Course) => course.isDraft)
			);
		} else if (newValue === 2) {
			setFilteredCourses(
				props.courses.filter((course: Course) => !course.isDraft)
			);
		} else {
			setFilteredCourses(props.courses);
		}
	};

	const onEdit = (courseId: number) => {
		// edit functionality
	};
	if (filteredCourses) {
		return (
			<div>
				<Navbar />
				<br />
				<AppBar position='static'>
					<Tabs value={selectedTab} variant='fullWidth' onChange={handleChange}>
						<Tab label='All Courses' />
						<Tab label='Drafts' />
						<Tab label='Published' />
					</Tabs>
				</AppBar>
				<div>
					{filteredCourses.map((course: Course) => {
						return (
							<Card
								contentArea={course.contentArea}
								ageGroup={course.ageGroup}
								teachingArtists={course.teachingArtists}
								subject={course.subject}
								color={course.color}
								isDraft={course.isDraft}
							/>
						);
					})}
				</div>
			</div>
		);
	} else
		return (
			<div>
				<Navbar />
				<br />
				<AppBar position='static'>
					<Tabs value={selectedTab} onChange={handleChange}>
						<Tab label='All Courses' />
						<Tab label='Drafts' />
						<Tab label='Published' />
					</Tabs>
				</AppBar>
				<br />
				No courses yet!
			</div>
		);
}

export default DoStuff;
