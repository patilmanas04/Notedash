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

const App = ()=>{
	return (
		<>
		<NoteState>
			<Router>
				<Navbar />
				<div className="container">
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/about" element={<About />}></Route>
				</Routes>
				</div>
			</Router>
		</NoteState>
		</>
	)
}

export default App;