import React from 'react';

class Connexion extends React.Component {

	goToChat = event => {
		event.preventDefault();
		const pseudo = this.pseudoInput.value;
		this.context.router.transitionTo(`/pseudo/${pseudo}`);
	};

	render() {
		return (
			<div className="connexionBox" onSubmit={(e) => this.goToChat(e)} >
			<form className="connexion">
				<input type="text" placeholder="Pseudo" required ref={(input) => {this.pseudoInput = input}} />
				<input type="text" placeholder="Server" required />
				<button type="submit">Go</button>
			</form>
			</div>
		)
	}

	static contextTypes = {
		router: React.PropTypes.object
	}
}

export default Connexion;