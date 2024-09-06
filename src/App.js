import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ManualSystems from "./components/Products/ManualSystems";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manual-systems" element={<ManualSystems />} />
      </Routes>
    </Router>
  );
}

export default App;
