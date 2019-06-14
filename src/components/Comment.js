import React from 'react';
import styled from 'styled-components';

const Comment = () => (
	<Container>
        <Title>* PC 및 모바일 웹에서 확인할 수 있습니다.</Title>
	</Container>
);

const Container = styled.div`
	width: 100%;
	margin: 2rem 0;
	display: flex;
	justify-content: flex-end;
	@media (max-width: 700px) {
		margin: 1em 0;
	}
`;

const Title = styled.h1`
	font-size: 0.8rem;
`;

export default Comment;
