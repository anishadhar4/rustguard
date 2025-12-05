import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-glow" />

        <h1 className="home-title">RustGuard</h1>

        <p className="home-subtitle">
          AI-powered rust detection & IoT corrosion monitoring for bridges,
          pipelines and critical infrastructure. Prevent failures before they happen.
        </p>

        <Link to="/detect">
          <button className="home-btn">
            Start Detection →
          </button>
        </Link>
      </section>

      {/* FEATURE CARDS SECTION */}
      <section className="home-features">
        <div className="home-card">
          <h3 className="home-card-title">🔍 Rust Detection</h3>
          <p className="home-card-text">
            Upload metal surface images and detect corrosion using YOLOv8-based AI.
          </p>
        </div>

        <div className="home-card">
          <h3 className="home-card-title">📡 IoT Monitoring</h3>
          <p className="home-card-text">
            ESP32 + DHT11sensors track humidity & temperature that drive corrosion.
          </p>
        </div>

        <div className="home-card">
          <h3 className="home-card-title">⚠ Risk Prediction</h3>
          <p className="home-card-text">
            Severity score & risk levels help plan inspections before damage escalates.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}


