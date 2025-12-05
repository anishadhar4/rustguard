import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import Sidebar from "./components/Sidebar";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Detection from "./pages/Detection";
import IoT from "./pages/IoT";
import History from "./pages/History";
import About from "./pages/About";

function AnimatedLayout() {
  const location = useLocation();

  return (
    <div className="container">
      {/* Hide sidebar only on landing page "/" */}
      {location.pathname !== "/" && <Sidebar />}

      <div className="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detect" element={<Detection />} />
            <Route path="/iot" element={<IoT />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedLayout />
    </Router>
  );
}
