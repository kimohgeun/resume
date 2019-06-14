import React from 'react';
import styled from 'styled-components';
import { experience } from '../data';

const Experience = () => (
	<Container>
		<Title>경력사항</Title>
		<Box>
			{experience.map(item => (
				<>
					<ImgBox>
						<Img src={item.img} />
					</ImgBox>
					<InfoBox>
						<Company>
							{item.company}
							<Position>({item.position})</Position>
						</Company>
						<Task>{item.task}</Task>
						<Period>{item.period}</Period>
					</InfoBox>
				</>
			))}
		</Box>
	</Container>
);

const Container = styled.div`
	width: 800px;
	margin: 2em 0;
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
	width: 120px;
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	width: 80px;
	background-image: url(${props => props.url});
	background-size: cover;
	background-position: center center;
`;

const InfoBox = styled.div`
	width: 100%;
	padding: 3em 0 3em 3em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Company = styled.span`
	font-weight: bold;
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const Position = styled.span`
	font-weight: normal;
	font-size: 0.7rem;
	padding: 0.5em 0;
`;

const Task = styled.span`
	font-size: 0.8rem;
`;

const Period = styled.span`
	font-size: 0.8rem;
	font-weight: bold;
`;

export default Experience;
