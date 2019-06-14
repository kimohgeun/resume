import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Profile from './Profile';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';

const App = () => (
	<Container>
		<GlobalStyle />
		<Profile />
		<Education />
		<Experience />
		<Skill />
	</Container>
);

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2em 0;
`;

export default App;
