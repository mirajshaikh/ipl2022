/** @format */

import styled from '@emotion/styled';
import React from 'react';
import Header from '../components/Header';
import MatchBox from '../components/MatchBox';
import matchs from '../data/matches.json';

const MatchGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	margin: 20px;

	@media screen and (max-width: 550px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

function index() {
	return (
		<div>
			<Header />
			<MatchGrid>
				{matchs.map((match, index) => {
					return <MatchBox data={match} key={index} />;
				})}
			</MatchGrid>
		</div>
	);
}

export default index;
