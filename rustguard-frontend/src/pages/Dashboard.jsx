import PageWrapper from "../components/PageWrapper";

export default function Dashboard() {
  return (
    <PageWrapper>
      <h1 className="gradient-title">Dashboard Overview</h1>
      <p style={{ opacity: 0.7 }}>RustGuard System Status</p>

      <div className="glass-panel" style={{ marginTop: 24 }}>
        <div className="card-grid">

          <div className="card">
            <p className="card-title">Rust Severity</p>
            <h2 className="card-value" style={{ color: "#ef4444" }}>N/A</h2>
          </div>

          <div className="card">
            <p className="card-title">Temperature</p>
            <h2 className="card-value">--°C</h2>
          </div>

          <div className="card">
            <p className="card-title">Humidity</p>
            <h2 className="card-value">--%</h2>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}

