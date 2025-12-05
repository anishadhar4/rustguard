import PageWrapper from "../components/PageWrapper";

export default function IoT() {
  return (
    <PageWrapper>
      <h1 className="gradient-title">IoT Monitoring</h1>
      <p style={{opacity:0.7, marginTop:10}}>
        Live sensor data will appear here after hardware integration.
      </p>

      <div className="glass-panel" style={{marginTop:25}}>
        <p>Temperature: --°C</p>
        <p>Humidity: --%</p>
        <p>Corrosion Risk: --</p>
      </div>
    </PageWrapper>
  );
}

