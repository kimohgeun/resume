import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Profile from './Profile';

const App = () => (
	<Container>
		<GlobalStyle />
		<Profile />
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
