import { BrowserRouter as Router, Routes, Route }from 
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/aboutus`} element={<Landing />}></Route>
          <Route path={`/interpretation`} element={<Landing />}></Route>
          <Route path={`/consulting`} element={<Landing />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;