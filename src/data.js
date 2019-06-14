import ohgeun from './assets/ohgeun.jpg';
import hansung from './assets/hansung.jpg';
import skons from './assets/skons.png';
import react from './assets/react.svg';
import redux from './assets/redux.svg';
import nodejs from './assets/nodejs.svg';
import express from './assets/express.svg';
import mongodb from './assets/mongodb.svg';
import informationProcessingEngineer from './assets/informationProcessingEngineer.png';

export const profile = {
	name: '김오근',
	email: 'ohgoodkim@gmail.com',
	github: 'https://github.com/kimohgeun',
	phone: '010-5022-1059',
	photo: ohgeun,
	selfIntroduction:
		'안녕하세요 웹 개발자 김오근입니다. 자바스크립트를 주로 사용하며 리액트를 이용하여 웹 프론트엔드 개발하는 것을 좋아합니다. 취미로 러닝 하는 것을 좋아하는데 함께 하면 멀리 나아갈 수 있으므로 러닝을 좋아합니다. 개발 또한 협업을 많이 해야 하는 일이기 때문에 함께 일하는 것이 중요하다고 생각합니다. 저의 목표는 함께 개발하면 믿을 수 있고 즐거운 개발자가 되어 함께 멀리 나아갈 수 있는 개발자가 되는 것입니다.',
};

export const education = [
	{
		id: 1,
		school: '한성대학교',
		major: '컴퓨터공학부',
		period: '2010.03 ~ 2017.02',
		img: hansung,
	},
];

export const experience = [
	{
		id: 1,
		company: 'SK 오앤에스',
		position: '매니저',
		period: '2017.01 ~ 2018.09',
		img: skons,
		task: [
			{
				id: 1,
				text: 'SK텔레콤 Access망 운용 및 유지보수',
			},
			{
				id: 2,
				text: '통화품질 개선',
			},
		],
	},
];

export const certificate = [
	{
		id: 1,
		name: '정보처리기사',
		issue: '한국산업인력공단',
		date: '2016.05',
		img: informationProcessingEngineer,
	},
];

export const skill = [
	{
		id: 1,
		name: 'React',
		img: react,
	},
	{
		id: 2,
		name: 'Redux',
		img: redux,
	},
	{
		id: 3,
		name: 'Node.js',
		img: nodejs,
	},
	{
		id: 4,
		name: 'Express',
		img: express,
	},
	{
		id: 5,
		name: 'MongoDB',
		img: mongodb,
	},
];
