import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: ''
        },
        isFetching: false
	};

	handelChanges = (e) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isFetching: true
        });
		axiosWithAuth()
			.post('/api/login', this.state.credentials)
			.then((response) => {
				localStorage.setItem('token', response.data.payload);
				this.props.history.push('/friends');
				console.log(this.props);
			})
			.catch((error) => console.log('Data not returned Login.js', error));
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="username"
						type="text"
						name="username"
						value={this.state.credentials.username}
						onChange={this.handelChanges}
					/>
					<input
						placeholder="password"
						type="password"
						name="password"
						value={this.state.credentials.password}
						onChange={this.handelChanges}
					/>
                    <button>Login</button>
                    {this.state.isFetching && 'loggin in'}
				</form>
			</div>
		);
	}
}

export default Login;
