import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute';
import TripsList from './components/TripsList';
import TripForm from './components/TripForm';

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/reg">Register</Link>
						<Link to="/login">Login</Link>
					</li>
				</ul>
				<Route path="/Login" component={Login} />
				<Route
					exact
					path="/reg"
					component={Registration}
				/>
				<PrivateRoute
					exact
					path="/protected"
					component={TripsList}
				/>
				<PrivateRoute
					exact
					path="/newtrip"
					component={TripForm}
				/>
				
			</div>
		</Router>
	);
}

export default App;





