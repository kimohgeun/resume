import React from 'react';
import styled from 'styled-components';

const Comment = () => (
	<Container>
		<Title>* PC 및 모바일 웹에서도 볼 수 있습니다.</Title>
		<Link href="https://kimohgeun.cf">https://kimohgeun.cf</Link>
	</Container>
);

const Container = styled.div`
	width: 100%;
	margin: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	@media (max-width: 700px) {
		margin: 1em 0;
	}
`;

const Title = styled.h1`
	font-size: 0.8rem;
`;

const Link = styled.a`
	&:hover {
		color: #3498db;
	}
	transition: color 0.2s linear;
	font-size: 0.8rem;
	cursor: pointer;
`;

export default Comment;
