import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';

class App extends React.Component {
	render() {
		return (
			<div className="box">
				<div>
				<div className="messages">
					<Message pseudo="antho"/>
				</div>
				<Formulaire />
				</div>
			</div>
		)
	}
}

export default App;