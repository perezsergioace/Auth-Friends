import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
	state = {
		id: Math.random(),
		name: '',
		age: '',
		email: ''
	};

	handleChanges = (e) => {
		let value = e.target.value;
		if (e.target.name === 'age') {
			value = Number(value);
		}
		this.setState({
			...this.state,
			[e.target.name]: value
		});
	};

	handleFriends = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/friends', this.state)
			.then((response) => {
				console.log(response);
				this.props.history.push('/friends');
			})
			.catch((response) => console.log(response));

		this.setState({
			...this.state,
			name: '',
			age: '',
			email: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleFriends}>
					<input
						placeholder="name"
						name="name"
						tpye="text"
						value={this.state.name}
						onChange={this.handleChanges}
					/>
					<input
						placeholder="age"
						name="age"
						tpye="number"
						value={this.state.age}
						onChange={this.handleChanges}
					/>
					<input
						placeholder="email"
						name="email"
						tpye="text"
						value={this.state.email}
						onChange={this.handleChanges}
					/>
					<button>Button</button>
				</form>
			</div>
		);
	}
}

export default AddFriend;
