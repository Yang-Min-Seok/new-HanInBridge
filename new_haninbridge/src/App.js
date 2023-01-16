import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Consulting from './pages/consulting';
import Interpretation from './pages/interpretation';
import Aboutus from './pages/aboutus';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/aboutus`} element={<Aboutus />}></Route>
          <Route path={`/interpretation`} element={<Interpretation />}></Route>
          <Route path={`/consulting`} element={<Consulting />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;