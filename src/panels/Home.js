import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group title="Всё, что я сделал за 3 часа:">
			<ListItem
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.last_name} ${fetchedUser.first_name}`}
			</ListItem>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="x1" level="3" onClick={go} data-to="persik">
					PLS dont touch it!
				</Button>
			</Div>
		</Group>
		<Group title="Navigation Example2">
			<Div>
				<Button size="x3" level="1" onClick={go} data-to="pup">
					Second time
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
