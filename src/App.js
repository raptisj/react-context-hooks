import React from 'react';
import SongContextProvider from './contexts/SongContext';
import SongList from './components/SongList';
import './scss/main.scss';

const App = () => {
	return (
		<SongContextProvider>
			<SongList />
		</SongContextProvider>
	);
};

export default App;
