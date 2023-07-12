import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import NoteState from './contexts/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';

const App = ()=>{
	const [alert, setAlert] = useState(false);

	// function to show alert which takes two parameters --> alert message and alert type
	const showAlert = (message, type)=>{
        setAlert({
            message: message,
            type: type
        });

		setTimeout(()=>{
			setAlert(false)
		}, 5000)
    }

	// automatically closes the alert in 5 seconds
	const closeAlert = ()=>{
        setAlert(false);
    }

	return (
		<>
		<NoteState>
			<Router>
				<Navbar />
				<Alert alert={alert} closeAlert={closeAlert}/>
				<div className="container">
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/about" element={<About />}></Route>
					<Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
					<Route exact path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
				</Routes>
				</div>
			</Router>
		</NoteState>
		</>
	)
}

export default App;