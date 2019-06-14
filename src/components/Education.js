import React from 'react';
import styled from 'styled-components';
import { education } from '../data';

const Education = () => (
	<Container>
		<Title>학력사항</Title>
		<Box>
			<PhotoBox>
				<Photo src={education.photo} />
			</PhotoBox>
			<InfoBox>
				<School>
					{education.school}
					<Major>{education.major}</Major>
				</School>
				<Period>{education.period}</Period>
			</InfoBox>
		</Box>
	</Container>
);

const Container = styled.div`
	width: 800px;
	margin: 2em 0;
`;

const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	border-bottom: 1px solid #e0e0e0;
	padding: 0.5em 0;
`;

const Box = styled.div`
	display: flex;
	align-items: center;
`;

const PhotoBox = styled.div`
	width: 120px;
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Photo = styled.img`
	width: 80px;
	background-image: url(${props => props.url});
	background-size: cover;
	background-position: center center;
`;

const InfoBox = styled.div`
	width: 100%;
	padding: 0 3em;
	display: flex;
	justify-content: space-between;
`;

const School = styled.span`
	font-size: 1.2rem;
	font-weight: bold;
	display: flex;
	flex-direction: column;
`;

const Major = styled.span`
	font-weight: normal;
	font-size: 0.8rem;
	padding: 0.5em 0;
	color: #757575;
	text-align: end;
`;

const Period = styled.span`
    font-size: 0.9rem;
	font-weight: bold;
`;

export default Education;
