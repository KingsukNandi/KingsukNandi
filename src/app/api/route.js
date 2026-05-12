export async function GET() {
  return new Response(JSON.stringify({ message: "Hello from API" }), {
    status: 200,
  });
}

export async function POST(req) {
  const body = await req.json();
  return new Response(JSON.stringify({ youSent: body }), { status: 200 });
}
