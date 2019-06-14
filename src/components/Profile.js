import React from 'react';
import styled from 'styled-components';
import { profile } from '../data';

const Profile = () => (
	<Container>
		<Title>프로필</Title>
		<Box>
			<Photo url={profile.photo} />
			<InfoBox>
				<Name>{profile.name}</Name>
				<Info>이메일 : {profile.email}</Info>
				<Info>깃허브 : {profile.github}</Info>
				<Info>연락처 : {profile.phone}</Info>
			</InfoBox>
		</Box>
		<Text>{profile.selfIntroduction}</Text>
	</Container>
);

const Container = styled.div`
	width: 100%;
	margin: 4em 0;
	@media (max-width: 700px) {
		margin: 1em 0 4em 0;
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
	align-items: center;
	padding: 2em 0;
	@media (max-width: 700px) {
		flex-wrap: wrap;
	}
`;

const Photo = styled.div`
	width: 100px;
	height: 100px;
	background-image: url(${props => props.url});
	background-size: cover;
	background-position: center center;
	border-radius: 50%;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	margin-right: 3em;
	@media (max-width: 700px) {
		width: 80px;
		height: 80px;
		margin-right: 2em;
	}
`;

const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em 0;
`;

const Name = styled.span`
	font-weight: bold;
	padding: 0.5em 0;
`;

const Info = styled.span`
	padding: 0.2em 0;
	font-size: 0.9rem;
`;

const Text = styled.div`
	font-size: 0.9rem;
	line-height: 1.5em;
`;

export default Profile;
