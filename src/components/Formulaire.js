import React from 'react';

class Formulaire extends React.Component {

	createMessage = event => {
		event.preventDefault();
		console.log(this.message.value);
		const message = this.message.value;

		this.props.addMessage(message);

		this.messageForm.reset();
	};

	render() {
		return (
			<form 
				className="form"
				onSubmit={(e) => this.createMessage(e)}
				ref={input => this.messageForm = input}
			>
				<textarea
					required
					maxLength="140"
					ref={input => this.message = input}
					>

					</textarea>

				<div className="info">140</div>

				<button type="submit">Envoyer!</button>
				
			</form>
		)
	}
}

export default Formulaire;