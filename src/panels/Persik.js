import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, Input, Select, IOS} from '@vkontakte/vkui';
import persik from '../img/troll.jpg';
import './Persik.css';
import Icon16Verified from '@vkontakte/icons/dist/16/verified';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Trollolololo 
		</PanelHeader>
		<img className="Persik" src={persik} onClick={props.go} data-to="home"  alt="Persik The superCat"/>
		<Input type="text" defaultValue="Кого вы видите?" alignment="center" />
		<Select placeholder="Тут можно ВыБрАтЬ<Icon16Verified/>">
  		<option value="m">Персик</option>
 		 <option value="f">Не Персик</option>
</Select>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
