import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Top from './pages/Top/Top';
import About from './pages/About/About';

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
