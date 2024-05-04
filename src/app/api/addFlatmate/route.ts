import mysql from "../../../utils/db";

export async function POST(req: any) {
	const { name, phone } = await req.json();

	try {
		const [result]: any = await mysql.query(
			"INSERT INTO flatmates (name, phone) VALUES (?, ?)",
			[name, phone]
		);

		const insertedFlatmate = {
			id: result.insertId,
			name,
			phone,
		};

		return new Response(JSON.stringify(insertedFlatmate), { status: 201 });
	} catch (error) {
		console.error("Error inserting flatmate:", error);
		return new Response(
			JSON.stringify({ error: "Failed to add flatmate" }),
			{ status: 500 }
		);
	}
}
