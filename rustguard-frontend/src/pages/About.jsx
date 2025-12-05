import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <h1 className="gradient-title">About RustGuard</h1>
      <p style={{opacity:0.7, marginTop:10}}>
        RustGuard is an AI-powered rust detection & condition monitoring system.
      </p>
    </PageWrapper>
  );
}
