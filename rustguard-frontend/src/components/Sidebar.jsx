import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>RustGuard</h2>

      <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
        Dashboard
      </NavLink>

      <NavLink to="/detect" className={({isActive}) => isActive ? "active" : ""}>
        Rust Detection
      </NavLink>

      <NavLink to="/iot" className={({isActive}) => isActive ? "active" : ""}>
        IoT Monitoring
      </NavLink>

      <NavLink to="/history" className={({isActive}) => isActive ? "active" : ""}>
        Detection History
      </NavLink>

      <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
        About
      </NavLink>
    </div>
  );
}

