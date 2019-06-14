import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Profile from './Profile';
import Education from './Education';
import Experience from './Experience';
import Certificate from './Certificate';
import Skill from './Skill';
import Comments from './Comment';

const App = () => (
	<Container>
		<Box>
			<GlobalStyle />
			<Profile />
			<Education />
			<Experience />
			<Certificate />
			<Skill />
			<Comments />
		</Box>
	</Container>
);

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 700px) {
		padding: 0 1em;
	}
`;

const Box = styled.div`
	width: 700px;
	@media (max-width: 700px) {
		width: 100%;
	}
`;

export default App;
