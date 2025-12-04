export default function Dashboard() {
  return (
    <div>
      <h1 className="gradient-title">Dashboard Overview</h1>

      <div className="card-grid">

        <div className="card">
          <p className="card-title">Rust Severity</p>
          <h2 className="card-value" style={{color:"#ef4444"}}>High</h2>
        </div>

        <div className="card">
          <p className="card-title">Temperature</p>
          <h2 className="card-value">29°C</h2>
        </div>

        <div className="card">
          <p className="card-title">Humidity</p>
          <h2 className="card-value">93%</h2>
        </div>

      </div>
    </div>
  );
}
