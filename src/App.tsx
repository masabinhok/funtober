import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'; // Adjust the import path accordingly
import Home from "./pages/Home";
import About from './pages/About'; // Ensure this path is correct
import SpendElonMoney from "./funtobers/spendElonMoney/SpendElonMoney";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar added here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* About page route added */}
        <Route path="/spend-elon-money" element={<SpendElonMoney />} /> {/* Existing route */}
      </Routes>
    </Router>
  );
};

export default App;
