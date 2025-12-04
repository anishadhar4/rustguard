import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Detection from "./pages/Detection";
import IoT from "./pages/IoT";
import Alerts from "./pages/Alerts";
import History from "./pages/History";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />

        <div style={{flex:1}}>
          <Navbar />
          
          <div className="main">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/detect" element={<Detection />} />
              <Route path="/iot" element={<IoT />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
