import React, { useContext, useState } from 'react';
import { SongContext } from '../contexts/SongContext';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

const ToggleTheme = () =>  {
	const { toggleTheme } = useContext(SongContext);
	const [icon, setIcon] = useState(true);

	const iconChange = () => {
		let newIcon = !icon;
		setIcon(newIcon);
	}

	return (
		<div className="toggle__box">
		<span>
		{icon ? (
			<img src={sun} alt="sun" className="sun-icon" />
			) : (
			<img src={moon} alt="moon" className="moon-icon" />
			)}
		</span>
			<div className="toggle__btn" onClick={toggleTheme}>
				<input type="checkbox" className="checkbox" onChange={iconChange}  />
				<div className="circle"></div>
				<div className="layer"></div>
			</div>
		</div>
	);
}

export default ToggleTheme;