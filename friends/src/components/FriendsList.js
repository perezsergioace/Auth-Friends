import React from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';


class FriendsList extends React.Component {
	state = {
		friends: [],
		isFetching: false
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
        this.setState({...this.state, isFetching: true})
		axiosWithAuth()
			.get('/api/friends')
			.then((response) => this.setState({ friends: response.data, isFetching: false }))
			.catch((error) => console.log('Data not return FriendsList.js', error));
	};

	render() {
		return (
			<div>
				<h1>FriendsList.js</h1>
                <div>{this.state.isFetching ? <Loader type="Rings" color="#00BFFF" height={100} width={100} /> : ''}</div>
                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                        <h1>{friend.name}</h1>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                ))}
			</div>
		);
	}
}

export default FriendsList;
