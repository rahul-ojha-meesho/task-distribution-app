"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddFlatmate = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const router = useRouter();

	const addFlatmateHandler = async () => {
		const response = await fetch("/api/addFlatmate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				phone: Number(phone),
			}),
		});

		if (response.ok) {
			const data = await response.json();
			setName("");
			setPhone("");
			alert("Flatmate added successfully");
			router.push("/");
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Enter flatmate name"
				required
				minLength={4}
				maxLength={25}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Enter flatmate number"
				required
				minLength={10}
				maxLength={10}
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
			<button onClick={addFlatmateHandler}>Add</button>
		</div>
	);
};

export default AddFlatmate;
