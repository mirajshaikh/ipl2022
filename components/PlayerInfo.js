/** @format */

import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { IoMdCheckmark, IoMdClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BoxContainer = styled.div`
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
		rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	border-radius: 10px;
	text-align: center;
	padding: 10px 0px;
	/* transition: all 0.4s ease; */
	margin: 10px;
	cursor: grab;
	img {
		pointer-events: none;
	}

	hr {
		margin: -4px 0;
		padding: 0;
	}
	.rank {
		position: absolute;
		top: 0px;
		left: 20px;
		color: gray;
	}
	.edit {
		position: absolute;
		top: 0px;
		right: 20px;
		color: gray;
	}
	a {
		cursor: pointer;
	}
	:hover {
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
			rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	}
`;

const Front = styled.div`
	height: 100%;
	height: 430px;

	@media screen and (max-width: 550px) {
		height: 500px;
	}

	.name {
		font-size: 20px;
		margin: 20px 0;
		white-space: nowrap;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 0px 15px;
	}
`;
const Back = styled.div`
	height: 430px;
	text-align: left;
	padding: 0px 20px 20px;
	@media screen and (max-width: 550px) {
		height: 500px;
	}
	input {
		width: 100%;
		height: 25px;
		font-size: 16px;
		margin-bottom: 0px;
		:disabled {
			background: none;
			border: none;
			color: #000;
			cursor: text;
		}
	}
	p {
		font-size: 14px;
		margin: 15px 0 0;
	}
	.icons {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
	}
`;

function PlayerInfo({ data, index, editInfo }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const [activeInput, setActiveInput] = useState();
	const [playerInfo, setPlayerInfo] = useState(data);

	const saveInfo = () => {
		if (playerInfo.name == '') {
			toast.error('Name cannot be empty !', {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else if (playerInfo.Role == '') {
			toast.error('Role cannot be empty !', {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else if (playerInfo.Nationality == '') {
			toast.error('Nationality cannot be empty !', {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else if (playerInfo['Batting Style'] == '') {
			toast.error('Batting Style cannot be empty !', {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else if (playerInfo.DOB == '') {
			toast.error('DOB cannot be empty !', {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else if (playerInfo['Batting Style'] == '') {
			toast.error('Batting Style cannot be empty !', {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else {
			editInfo(index, playerInfo);
			setIsFlipped(false);
			setActiveInput('');
		}
	};

	return (
		<BoxContainer>
			<ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
				<Front>
					{index < 11 && <h4 className='rank'>#{index + 1}</h4>}
					{data.edited < 11 && <h4 className='edit'>edited</h4>}
					<img
						src={`/teams/CSK/${data.img}.webp`}
						alt={data.name}
						width='100%'
					/>
					<hr />
					<div className='name'>{playerInfo.name}</div>
					<hr />
					<p
						onClick={() => {
							setIsFlipped(true);
							setPlayerInfo(data);
						}}>
						<a>view detail</a>
					</p>
				</Front>
				<Back>
					{playerInfo && (
						<form>
							<div className='icons'>
								<IoMdClose
									onClick={() => {
										setIsFlipped(false);
										setActiveInput('');
										setPlayerInfo({ ...data });
									}}
									size='20px'
									color='#4a4a4a'
								/>
								<IoMdCheckmark
									onClick={() => {
										saveInfo();
									}}
									size='25px'
									color='green'
								/>
							</div>
							<hr />
							<div onClick={() => setActiveInput('Name')}>
								<p>Name</p>
								<input
									type='text'
									onChange={(e) =>
										setPlayerInfo({
											...playerInfo,
											name: e.target.value,
										})
									}
									defaultValue={playerInfo.name}
									disabled={activeInput != 'Name'}
								/>
							</div>

							<div onClick={() => setActiveInput('Role')}>
								<p>Role</p>
								<input
									type='text'
									defaultValue={playerInfo.Role}
									disabled={activeInput != 'Role'}
									onChange={(e) =>
										setPlayerInfo({
											...playerInfo,
											Role: e.target.value,
										})
									}
								/>
							</div>

							<div onClick={() => setActiveInput('Nationality')}>
								<p>Nationality</p>
								<input
									type='text'
									defaultValue={playerInfo.Nationality}
									disabled={activeInput != 'Nationality'}
									onChange={(e) =>
										setPlayerInfo({
											...playerInfo,
											Nationality: e.target.value,
										})
									}
								/>
							</div>
							<div onClick={() => setActiveInput('Batting Style')}>
								<p>Batting Style</p>
								<input
									type='text'
									defaultValue={playerInfo['Batting Style']}
									disabled={activeInput != 'Batting Style'}
									onChange={(e) =>
										setPlayerInfo({
											...playerInfo,
											'Batting Style': e.target.value,
										})
									}
								/>
							</div>
							<div onClick={() => setActiveInput('DOB')}>
								<p>DOB</p>
								<input
									type='text'
									defaultValue={playerInfo.DOB}
									disabled={activeInput != 'DOB'}
									onChange={(e) =>
										setPlayerInfo({
											...playerInfo,
											DOB: e.target.value,
										})
									}
								/>
							</div>
							<div onClick={() => setActiveInput('Bowling Style')}>
								<p>Bowling Style</p>
								<input
									type='text'
									defaultValue={playerInfo['Bowling Style']}
									disabled={activeInput != 'Bowling Style'}
									onChange={(e) =>
										setPlayerInfo({
											...playerInfo,
											'Bowling Style': e.target.value,
										})
									}
								/>
							</div>
							<div onClick={() => setActiveInput('IPL Debut')}>
								<p>IPL Debut</p>
								<input
									type='text'
									defaultValue={playerInfo['IPL Debut']}
									disabled={activeInput != 'IPL Debut'}
									onChange={(e) =>
										setPlayerInfo({
											...playerInfo,
											'IPL Debut': e.target.value,
										})
									}
								/>
							</div>
						</form>
					)}
				</Back>
			</ReactCardFlip>
		</BoxContainer>
	);
}

export default PlayerInfo;
