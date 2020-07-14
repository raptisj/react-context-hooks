import React, { Fragment, useContext } from 'react';
import { SongContext } from '../contexts/SongContext';

const EachSong = ({ song }) => {
	const { dispatch } = useContext(SongContext);

	return (
		<Fragment>
			<div className="edit-field">
				<p>{song.title}</p>
			</div>

			<div className="btn__group">
				<button className="btn__del" onClick={() => dispatch({ type: 'DELETE_SONG', id: song.id })}>
					Delete
				</button>

				<button className="btn__edit" onClick={() => dispatch({ type: 'EDIT_SONG', id: song.id })}>
					Edit
				</button>
			</div>
		</Fragment>
	);
};

export default EachSong;
