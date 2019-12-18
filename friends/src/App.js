import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<h1>Friends App</h1>
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/friends">Friends</Link>
					</li>
					<li>
						<Link to="/newfriend">Add new Friends!</Link>
					</li>
				</ul>
				<Switch>
					<PrivateRoute exact path="/friends" component={FriendsList} />
					<PrivateRoute exact path="/newfriend" component={AddFriend} />
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
