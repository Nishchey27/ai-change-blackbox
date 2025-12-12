export default async function PRListPage() {
  // Fetch from your deployed Vercel API
  const res = await fetch(
    "https://ai-change-blackbox.vercel.app/api/events/kestra",
    { cache: "no-store" }
  );

  const runs = await res.json();

  // Transform DB rows into dashboard cards
  const prs = runs.map((r: any) => ({
    id: r.id,
    title: r.pr_id,
    branch: r.analysis?.branch || "unknown",
    risk: r.verify?.risk_level || "Unknown",
    status: r.verify?.tests_passed ? "Passing" : "Failing",
    timestamp: r.created_at
  }));

  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>Pull Requests</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {prs.length === 0 && (
          <p style={{ color: "#777" }}>No PR data found yet.</p>
        )}

        {prs.map((pr: any) => (
          <div
            key={pr.id}
            style={{
              padding: 16,
              border: "1px solid #ddd",
              borderRadius: 8
            }}
          >
            <h2 style={{ margin: 0 }}>{pr.title}</h2>
            <p style={{ margin: 0, color: "#555" }}>Branch: {pr.branch}</p>
            <p style={{ margin: 0, color: "#555" }}>Risk: {pr.risk}</p>
            <p style={{ margin: 0, color: "#555" }}>
              Status: {pr.status}
            </p>
            <p style={{ margin: 0, color: "#555" }}>
              Time: {new Date(pr.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
