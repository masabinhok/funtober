import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpendElonMoney from "./funtobers/spendElonMoney/SpendElonMoney";
import Home from "./pages/Home";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spend-elon-money" element={<SpendElonMoney />} />
      </Routes>
    </Router>
  );
}
