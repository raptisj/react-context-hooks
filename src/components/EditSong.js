import React, { useState, useContext } from 'react';
import { SongContext } from '../contexts/SongContext';

const EditSong = ({song}) => {
	const { dispatch } = useContext(SongContext);
	const [ updateTitle, setUpdateTitle ] = useState(song.title);
	const handleUpdate = (e) => {
		e.preventDefault();
		if (!updateTitle) return;
		dispatch({type: 'UPDATE_SONG', id: song.id, updateTitle})
	}

	const cancelEdit = () => {
		dispatch({type: 'ABORT_EDIT', id: song.id});
	}

	return ( 
		<form className="edit-song-form" onSubmit={handleUpdate}>
			<div className="edit-field">
				<input type="text" value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)} autoFocus />
			</div>
			<div className="btn__edit-group">
				<button className="btn__save" type="submit">Save</button>
				<button className="btn__cancel" onClick={cancelEdit}>Cancel</button> 
			</div>
		</form>
	);
}

export default EditSong;