import React from 'react';
import styled from 'styled-components';
import { experience } from '../data';

const Experience = () => (
	<Container>
		<Title>경력사항</Title>
		{experience.map(item => (
			<Box key={item.id}>
				<ImgBox>
					<Img src={item.img} />
				</ImgBox>
				<InfoBox>
					<Company>{item.company}</Company>
					<AddInfo>
						{item.period} / {item.position}
					</AddInfo>
					{item.task.map(item => (
						<Task key={item.id}>
							<Circle />
							{item.text}
						</Task>
					))}
				</InfoBox>
			</Box>
		))}
	</Container>
);

const Container = styled.div`
	width: 100%;
	margin: 4em 0;
`;

const Title = styled.h1`
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 0.2em;
	border-bottom: 1px solid #e0e0e0;
	padding: 0.5em 0;
`;

const Box = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 2em 0;
`;

const ImgBox = styled.div`
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #e0e0e0;
	border-radius: 50%;
	margin-right: 3em;
`;

const Img = styled.img`
	width: 80px;
	background-image: url(${props => props.url});
	background-size: cover;
	background-position: center center;
`;

const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em 0;
`;

const Company = styled.span`
	font-weight: bold;
`;

const AddInfo = styled.span`
	font-size: 0.8rem;
	padding: 0.5em 0;
`;

const Task = styled.span`
	display: flex;
	align-items: center;
	font-size: 0.8rem;
	padding: 1em 0 0.5rem 1rem;
`;

const Circle = styled.div`
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: #424242;
	margin-right: 5px;
`;

export default Experience;
