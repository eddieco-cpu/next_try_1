export function GET() {
  //
  return Response.json({
    name: "env",
    value: process.env.TEST_TEXT || "no env",
  });
}
