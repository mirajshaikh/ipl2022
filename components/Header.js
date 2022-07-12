/** @format */

import Image from 'next/image';
import React from 'react';
import Logo from '../Images/logo.png';
import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	padding: 10px 20px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Menu = styled.div`
	ul {
		display: flex;
		align-items: center;
		justify-content: end;
		gap: 40px;
		li {
			list-style: none;
			cursor: pointer;
			font-size: 18px;
		}
	}
`;

function Header() {
	return (
		<HeaderWrapper>
			<div>
				<Link href='/' passHref>
					<Image src={Logo} alt='Logo' height={70} width={200} />
				</Link>
			</div>
			<Menu>
				<ul>
					<Link href='/' passHref>
						<a href=''>
							<li>Matches</li>
						</a>
					</Link>
					<Link href='/teams' passHref>
						<a href=''>
							<li>Teams</li>
						</a>
					</Link>
				</ul>
			</Menu>
		</HeaderWrapper>
	);
}

export default Header;
