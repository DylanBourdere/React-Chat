import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../base';

class App extends React.Component {

	state = {
		messages: {}
	}

	componentWillMount() {
		this.ref = base.syncState('/', {
			context: this,
			state: 'messages'
		});
	}

	addMessage = (message) => {
		// Copier le state
		const messages = {...this.state.messages};
		// On ajoute le message avec une clé timestamp
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		// MAJ du state
		this.setState({ messages });
	}

	render() {
				const messages = Object
										.keys(this.state.messages)
										.map(key => <Message key={key} details={this.state.messages[key]} />);
		return (
			<div className="box">
				<div>
				<div className="messages">
					{messages}
				</div>
				<Formulaire addMessage={this.addMessage}
							pseudo={this.props.params.pseudo}
							length="140"
							/>
				</div>
			</div>
		)
	}
}

export default App;