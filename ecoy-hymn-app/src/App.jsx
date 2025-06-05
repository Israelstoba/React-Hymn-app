import './main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hymn from './pages/Hymn';
import HymnPage from './pages/HymnPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hymn" element={<Hymn />} />
      <Route path="/hymn/:id" element={<HymnPage />} />
    </Routes>
  );
}
export default App;
