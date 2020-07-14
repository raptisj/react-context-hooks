import uuid from 'uuid/v1';

export const songReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_SONG':
			return [
				...state,
				{
					title: action.title,
					id: uuid()
				}
			];

		case 'DELETE_SONG':
			return state.filter((song) => song.id !== action.id);

		case 'EDIT_SONG':
			return state.filter((song) => {
				if (song.id === action.id) {
					return (song.edit = true);
				}
				return state;
			});

		case 'ABORT_EDIT':
			return state.filter((song) => {
				if (song.id === action.id) {
					song.edit = false;
					return state.push(song);
				}
				return state;
			});

		case 'UPDATE_SONG':
			return state.filter((song) => {
				if (song.id === action.id) {
					song.title = action.updateTitle;
					song.edit = false;
					return state.push(song);
				}
				return state;
			});

		default:
			return state;
	}
};
