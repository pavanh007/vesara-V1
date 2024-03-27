
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/root/index.jsx';
import { ConstructionPage } from './pages/construction/index.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/construction" element={<ConstructionPage />} />
      <Route path="/interior" element={<InteriorPage />} />
    </Routes>
  );
}

export default App
