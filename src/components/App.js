import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Profile from './Profile';
import Education from './Education';

const App = () => (
	<Container>
		<GlobalStyle />
		<Profile />
		<Education />
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
