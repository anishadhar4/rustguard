import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Detection from "./pages/Detection";
import IoT from "./pages/IoT";          // create later or dummy
import History from "./pages/History";  // create later or dummy
import About from "./pages/About";      // create later or dummy

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detect" element={<Detection />} />
        <Route path="/iot" element={<IoT />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="main">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

