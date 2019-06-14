import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const App = () => (
	<Container>
		<GlobalStyle />
		이력서
	</Container>
);

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default App;
