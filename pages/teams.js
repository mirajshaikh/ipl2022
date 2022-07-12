/** @format */

import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import data from '../data/teams.json';

const TeamGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 30px;
	margin: 20px;

	@media screen and (max-width: 550px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Team = styled.div`
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
		rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	border-radius: 10px;
	background: ${(props) => props.bg};
	padding: 20px;
	text-align: center;
	color: #fff;
	cursor: pointer;
`;
function Teams() {
	return (
		<>
			<Header />
			<TeamGrid>
				{data.map((data, index) => (
					<Team bg={data.BG} key={index}>
						<Link href={`./team/${data.name}`}>
							<div>
								<img
									src={`${data.logo}`}
									alt={`${data.name}`}
									width='150px'
								/>
								<h2>{data.name}</h2>
								<h4>{data.Venue}</h4>
							</div>
						</Link>
					</Team>
				))}
			</TeamGrid>
		</>
	);
}

export default Teams;
