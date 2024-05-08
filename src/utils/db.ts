import mysql from "mysql2/promise";

const connection = mysql.createPool({
	host: process.env.NEXT_PUBLIC_DATABASE_HOST,
	user: process.env.NEXT_PUBLIC_DATABASE_USER,
	password: process.env.NEXT_PUBLIC_DATABASE_PASSWORD,
	database: process.env.NEXT_PUBLIC_DATABASE_NAME,
	waitForConnections: true,
	connectionLimit: 5,
	queueLimit: 0,
});

export default connection;
