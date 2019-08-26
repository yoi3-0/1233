import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Cell, Radio, Tooltip, Separator} from '@vkontakte/vkui';
import pup2 from '../img/troll.jpg';
import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon16Verified from '@vkontakte/icons/dist/16/verified';

const osname = platform();

const Pup = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			test2
		</PanelHeader>
		<Tooltip text="Вау! Это подсказка?">
		<Cell>Hello World! <Icon16Verified/> </Cell>  
		</Tooltip>
		<Separator style={{ margin: '30px 0' }} />
		<img className="Pup" src={pup2} onClick={props.go} data-to="persik" alt="Persik The Cat"/>
		<Separator style={{ margin: '10px 0' }} />
		<div>
          <Radio name="radio" value="1" description="Вау, ты можешь в Radio?" defaultChecked>Пункт1</Radio>
          <Radio name="radio" value="2">Пункт2</Radio>
          <Radio name="radio" value="3"description="В разработке" disabled>Пункт3 (disabled)</Radio>
        </div>
	</Panel>
);

Pup.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Pup;
