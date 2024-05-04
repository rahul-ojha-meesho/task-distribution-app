import mysql from "../../../utils/db";

export async function GET() {
	try {
		const [flatmates] = await mysql.query("SELECT * FROM flatmates");
		const [tasks] = await mysql.query("SELECT * FROM tasks");

		return new Response(JSON.stringify({ flatmates, tasks }), {
			status: 200,
		});
	} catch (error) {
		console.error("Error fetching flatmates:", error);
		return new Response(
			JSON.stringify({ error: "Failed to fetch flatmates" }),
			{ status: 500 }
		);
	}
}
