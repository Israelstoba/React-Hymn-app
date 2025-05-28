import './main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hymn from './pages/Hymn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hymn" element={<Hymn />} />
    </Routes>
  );
}
export default App;
