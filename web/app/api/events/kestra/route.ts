import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// POST /api/events/kestra
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pr_id, analysis, verify, run_id, timestamp } = body;

    if (!pr_id) {
      return new Response("Missing pr_id", { status: 400 });
    }

    const created_at = timestamp ? new Date(timestamp) : new Date();

    // Insert row into Neon Postgres
    await sql`
      INSERT INTO runs (pr_id, analysis, verify, run_id, created_at)
      VALUES (
        ${pr_id},
        ${JSON.stringify(analysis)},
        ${JSON.stringify(verify)},
        ${run_id},
        ${created_at}
      )
    `;

    return Response.json({ success: true });
  } catch (err: any) {
    console.error("POST /api/events/kestra error:", err);
    return new Response(err.message, { status: 500 });
  }
}

// GET /api/events/kestra
export async function GET() {
  try {
    const rows = await sql`
      SELECT * FROM runs ORDER BY created_at DESC
    `;
    return Response.json(rows);
  } catch (err: any) {
    console.error("GET /api/events/kestra error:", err);
    return new Response(err.message, { status: 500 });
  }
}
