import React from 'react';

class Message extends React.Component {
	render() {
		return (
			<p className="user-message">
				<strong>{this.props.details.pseudo}</strong>: {this.props.details.message}
			</p>
		)
	}
}

export default Message;