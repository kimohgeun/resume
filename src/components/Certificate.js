import React from 'react';
import styled from 'styled-components';
import { certificate } from '../data';

const Certificate = () => (
	<Container>
		<Title>자격사항</Title>
		{certificate.map(item => (
			<Box key={item.id}>
				<ImgBox>
					<Img src={item.img} />
				</ImgBox>
				<InfoBox>
					<Name>{item.name}</Name>
					<AddInfo>
						{item.date} / {item.issue}
					</AddInfo>
				</InfoBox>
			</Box>
		))}
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

const Name = styled.span`
	font-weight: bold;
`;

const AddInfo = styled.span`
	font-size: 0.8rem;
	padding: 0.5em 0;
`;

export default Certificate;
