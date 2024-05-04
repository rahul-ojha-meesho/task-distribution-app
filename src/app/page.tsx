"use client";
import { useEffect } from "react";
import Link from "next/link";
import useStore from "@/store";

export default function Home() {
	const { flatmates, setFlatmates, tasks, setTasks } = useStore();

	useEffect(() => {
		async function fetchFlatmates() {
			const response = await fetch("/api/fetchData");
			if (response.ok) {
				const data = await response.json();
				setFlatmates(data?.flatmates);
				setTasks(data?.tasks);
			}
		}
		fetchFlatmates();
	}, []);

	return (
		<main>
			<div>Home Page</div>
			<Link href="/add-flatmate">Add Flatmate</Link>
			<Link href="add-task">Add Task</Link>
		</main>
	);
}
