import React from 'react';
import styled from 'styled-components';
import { education } from '../data';

const Education = () => (
	<Container>
		<Title>학력사항</Title>
		<Box>
			<ImgBox>
				<Img src={education.img} />
			</ImgBox>
			<InfoBox>
				<School>
					{education.school}
					<Major>({education.major})</Major>
				</School>
				<Period>{education.period}</Period>
			</InfoBox>
		</Box>
	</Container>
);

const Container = styled.div`
	width: 100%;
	margin: 4em 0;
`;

const Title = styled.h1`
	font-size: 1.2rem;
	font-weight: bold;
	border-bottom: 1px solid #e0e0e0;
	padding: 0.5em 0;
`;

const Box = styled.div`
	display: flex;
	align-items: center;
`;

const ImgBox = styled.div`
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 3em;
	@media (max-width: 700px) {
		width: 80px;
		height: 80px;
		margin-right: 2em;
	}
`;

const Img = styled.img`
	width: 100px;
	background-image: url(${props => props.url});
	background-size: cover;
	background-position: center center;
	@media (max-width: 700px) {
		width: 80px;
	}
`;

const InfoBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const School = styled.span`
	font-weight: bold;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 800px) {
		font-size: 0.9rem;
	}
`;

const Major = styled.span`
	font-weight: normal;
	font-size: 0.7rem;
`;

const Period = styled.span`
	font-size: 0.8rem;
	font-weight: bold;
	@media (max-width: 700px) {
		font-size: 0.7rem;
	}
`;

export default Education;
