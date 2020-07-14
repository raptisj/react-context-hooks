import React, { useState, useContext } from 'react';
import { SongContext } from '../contexts/SongContext';
import { Spring } from 'react-spring/renderprops';

const SongForm = () => {
	const { dispatch } = useContext(SongContext);
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title) return;
		dispatch({ type: 'ADD_SONG', title });
		setTitle('');
	};

	const changePlaceholder = (e) => {
		const inputEffect = document.querySelector('.input');
		inputEffect.parentElement.classList.add('change');
	};

	const initialPlaceholder = () => {
		const inputEffect = document.querySelector('.input');
		inputEffect.parentElement.classList.remove('change');
		setTimeout(() => {
			setTitle('');
		}, 200);
	};

	return (
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{(props) => (
				<div style={props}>
					<form onSubmit={handleSubmit} className="add__form">
						<div className="add__form-actions">
							<div className="input w-100" onClick={(e) => changePlaceholder(e)}>
								<label>Song Name:</label>
								<input
									type="text"
									onBlur={initialPlaceholder}
									value={title}
									className="input__child"
									onChange={(e) => setTitle(e.target.value)}
									required
								/>
							</div>

							<input type="submit" value="add song" />
						</div>
					</form>
				</div>
			)}
		</Spring>
	);
};

export default SongForm;
