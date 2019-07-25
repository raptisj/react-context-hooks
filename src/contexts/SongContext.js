import React, { useState, createContext, useReducer, useEffect } from 'react';
import { songReducer } from '../reducers/songReducer';

export const SongContext = createContext();

const SongContextProvider = (props) => {
	const [darkmode, setDarkmode] = useState(false);
	const [songs, dispatch] = useReducer(songReducer, [
		{ title: 'Asturias', id: 1, edit: false},
		{ title: 'Chasing the Sun', id: 2, edit: false },
		{ title: 'Phyrigian Gates', id: 3, edit: false }
		], () => {
			const local = localStorage.getItem('songs');
			return local ? JSON.parse(local) : [];	
		})

	useEffect(() => {
		localStorage.setItem('songs', JSON.stringify(songs))
	}, [songs]);

	const toggleTheme = () => {
		setDarkmode(!darkmode);
	}

	return (
		<SongContext.Provider value={{ dispatch, songs, toggleTheme, darkmode }}>
			{props.children}
		</SongContext.Provider>
		)
} 

export default SongContextProvider;

