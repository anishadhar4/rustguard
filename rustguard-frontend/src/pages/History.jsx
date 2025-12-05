import PageWrapper from "../components/PageWrapper";

export default function History() {
  return (
    <PageWrapper>
      <h1 className="gradient-title">Detection History</h1>
      <p style={{opacity:0.7, marginTop:10}}>
        Stored detection results will be shown here later.
      </p>
    </PageWrapper>
  );
}

