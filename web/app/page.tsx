export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Pull Requests</h1>

      <div className="space-y-6">

        <div className="border border-zinc-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Fix login bug</h2>
          <p>Branch: feature/broken-login</p>
          <p>Risk: High</p>
          <p>Status: Failing</p>
        </div>

        <div className="border border-zinc-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Refactor utils</h2>
          <p>Branch: refactor/utils</p>
          <p>Risk: Low</p>
          <p>Status: Passing</p>
        </div>

      </div>
    </div>
  );
}
