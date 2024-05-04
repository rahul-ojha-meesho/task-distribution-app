import mysql from "../../../utils/db";

export async function POST(req: any) {
	const {
		description,
		dueDate: due_date,
		assignedTo: assigned_to,
	} = await req.json();

	try {
		const [result]: any = await mysql.query(
			"INSERT INTO tasks (description, due_date, assigned_to) VALUES (?, ?, ?)",
			[description, due_date, assigned_to]
		);

		const insertedTask = {
			id: result.insertId,
			description,
			due_date,
			assigned_to,
		};

		return new Response(JSON.stringify(insertedTask), { status: 201 });
	} catch (error) {
		console.error("Error inserting task:", error);
		return new Response(JSON.stringify({ error: "Failed to add task" }), {
			status: 500,
		});
	}
}
