import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TrackingPage from './pages/TrackingPage';
// import ShopsPage from './pages/ShopsPage';
import VihiclePage from './pages/Vihicle';
import SolutionsPage from './pages/SolutionsPage';
import SupportPage from './pages/SupportPage';
import Hub from './pages/Hub';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/vihicle" element={<VihiclePage />} />
          <Route path="/" element={<SolutionsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/hub" element={<Hub />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;