/** @format */

import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import VS from '../Images/vs.png';

const BoxContainer = styled.div`
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
		rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	border-radius: 10px;
	text-align: center;
	padding: 10px 0px;
	transition: all 0.4s ease;
	.teams {
		display: flex;
		align-items: center;
		gap: 10px;
		justify-content: center;
	}

	:hover {
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
			rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	}
`;

function MatchBox({ data }) {
	return (
		<BoxContainer>
			<p>May 13, 2022</p>
			<hr />
			<div className='teams'>
				<Link href={`/team/${data.p1}`} passHref>
					<a href=''>
						<img
							src={`/logos/${data.p1}.png`}
							alt=''
							width={150}
							height={150}
						/>
					</a>
				</Link>
				<Image src={VS} alt='VS' />
				<Link href={`/team/${data.p2}`} passHref>
					<a href=''>
						<img
							src={`/logos/${data.p2}.png`}
							alt=''
							width={150}
							height={150}
						/>
					</a>
				</Link>
			</div>
			<hr />
			<p>Wankhede Stadium</p>
		</BoxContainer>
	);
}

export default MatchBox;
