import React, { Fragment, useContext } from 'react';
import ToggleTheme from './ToggleTheme';
import { SongContext } from '../contexts/SongContext';

const Header = () => {	
	const { songs } = useContext(SongContext);
	return (
		<Fragment>
			<div className="darkmode__btn">
				<ToggleTheme />
			</div>
			<h1 className="main-title">Songlist App</h1>
			<h2 className="main-subtitle">... with Hooks and Context API</h2>
			<p>Currently { songs.length } songs in list</p>
		</Fragment>
	);
}

export default Header;