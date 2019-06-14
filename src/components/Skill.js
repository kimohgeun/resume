import React from 'react';
import styled from 'styled-components';
import { skill } from '../data';

const Skill = () => (
	<Container>
		<Title>스킬</Title>
		<Box>
			{skill.map(item => (
				<ImgBox key={item.id}>
					<Img src={item.img} />
					<Text>{item.name}</Text>
				</ImgBox>
			))}
		</Box>
	</Container>
);

const Container = styled.div`
	width: 100%;
	margin: 2rem 0;
	@media (max-width: 700px) {
		margin: 1em 0;
	}
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
`;

const ImgBox = styled.div`
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #e0e0e0;
	position: relative;
	margin: 2.5em 2.5em 2.5em 0;
`;

const Img = styled.img`
	width: 60px;
`;

const Text = styled.span`
	position: absolute;
	font-size: 0.8rem;
	font-weight: bold;
	bottom: -1.5em;
`;

export default Skill;
