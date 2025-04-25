import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Top from './pages/Top/Top';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Top />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
