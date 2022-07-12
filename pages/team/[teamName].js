/** @format */

import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import PlayerInfo from '../../components/PlayerInfo';
import CSK from '../../data/CSK.json';
import {
	GridContextProvider,
	GridDropZone,
	GridItem,
	swap,
} from 'react-grid-drag';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

function Team() {
	const [team, setTeam] = useState(CSK);
	const [windowDimenion, detectHW] = useState({
		winWidth: '',
		winHeight: '',
	});

	const detectSize = () => {
		detectHW({
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
		});
	};

	useEffect(() => {
		detectSize();
		window.addEventListener('resize', detectSize);
		return () => {
			window.removeEventListener('resize', detectSize);
		};
	}, []);

	const router = useRouter();
	const { teamName } = router.query;

	function onChange(sourceId, sourceIndex, targetIndex, targetId) {
		const nextState = swap(team, sourceIndex, targetIndex);
		setTeam(nextState);
		localStorage.setItem(teamName, JSON.stringify(nextState));
	}
	useEffect(() => {
		const localStorageItems = localStorage.getItem(teamName);
		if (localStorageItems?.length > 1) {
			setTeam(JSON.parse(localStorageItems));
		}
	}, [teamName]);

	function editInfo(index, editedData) {
		const temp = team;
		temp[index] = { ...editedData, edited: true };
		setTeam(temp);
		console.log('re', temp);
		setTeam([...temp]);
		localStorage.setItem(teamName, JSON.stringify(temp));
	}
	return (
		<div>
			<Header />
			<h1 style={{ textAlign: 'center' }}>{teamName}</h1>
			<GridContextProvider onChange={onChange}>
				<GridDropZone
					id='items'
					boxesPerRow={windowDimenion.winWidth < 600 ? 1 : 4}
					rowHeight={windowDimenion.winWidth < 600 ? 600 : 500}
					style={{
						height: windowDimenion.winWidth < 600 ? '5000px' : '2000px',
						margin: '10px',
					}}>
					{team.map((player, index) => (
						<GridItem key={player.id}>
							<PlayerInfo
								data={player}
								index={index}
								editInfo={editInfo}
							/>
						</GridItem>
					))}
				</GridDropZone>
			</GridContextProvider>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default Team;
