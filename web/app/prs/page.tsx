export default function PRListPage() {
  const prs = [
    {
      id: 12,
      title: "Fix login bug",
      branch: "feature/broken-login",
      risk: "High",
      status: "Failing",
    },
    {
      id: 9,
      title: "Refactor utils",
      branch: "refactor/utils",
      risk: "Low",
      status: "Passing",
    }
  ];

  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>Pull Requests</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {prs.map(pr => (
          <div 
            key={pr.id}
            style={{
              padding: 16,
              border: '1px solid #ddd',
              borderRadius: 8
            }}
          >
            <h2 style={{ margin: 0 }}>{pr.title}</h2>
            <p style={{ margin: 0, color: '#555' }}>Branch: {pr.branch}</p>
            <p style={{ margin: 0, color: '#555' }}>Risk: {pr.risk}</p>
            <p style={{ margin: 0, color: '#555' }}>Status: {pr.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
