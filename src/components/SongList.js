import React, { useContext } from 'react';
import { SongContext } from '../contexts/SongContext';
import Header from './Header';
import EditSong from './EditSong';
import EachSong from './EachSong';
import SongForm from './SongForm';
import { Spring } from 'react-spring/renderprops';

const SongList = () => {
	const { darkmode, songs } = useContext(SongContext);
	const theme = darkmode ? ' darkmode' : '';

	return (
		<div className={'App' + theme}>
			<Header />

			<div className="inner__wrapper">
				<ul className="items">
					{songs.length > 0 ? (
						songs.map((song) => (
							<Spring key={song.id} from={{ opacity: 0 }} to={{ opacity: 1 }}>
								{(props) => (
									<li className="items__each" style={props}>
										{song.edit ? <EditSong song={song} /> : <EachSong song={song} />}
									</li>
								)}
							</Spring>
						))
					) : (
						<div>
							<h3>... ain't got no songs</h3>
						</div>
					)}
				</ul>

				<SongForm />
			</div>
		</div>
	);
};

export default SongList;
