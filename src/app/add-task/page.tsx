"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FormContainer, Input, Label, Select, Button } from "./addTask.styled";
import "react-datepicker/dist/react-datepicker.css";
import useStore from "@/store";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

const AddTask = () => {
	const { flatmates } = useStore();
	const [description, setDescription] = useState("");
	const [dueDate, setDueDate] = useState<any>(null);
	const [assignedTo, setAssignedTo] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (description && dueDate && assignedTo) {
			try {
				const formattedDate = format(dueDate, "yyyy-MM-dd");
				await fetch("/api/addTask", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						description,
						formattedDate,
						assignedTo,
					}),
				});
				alert("Task added successfully");
				setDescription("");
				setDueDate(null);
				setAssignedTo("");
				router.push("/");
			} catch (e) {
				//
			}
		}
	};

	return (
		<FormContainer>
			<form onSubmit={handleSubmit}>
				<Label>Description:</Label>
				<Input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Task description"
					required
				/>

				<Label>Due Date:</Label>
				<DatePicker
					selected={dueDate}
					onChange={(date) => {
						setDueDate(date);
					}}
					dateFormat="yyyy-MM-dd"
					minDate={new Date()}
					isClearable
					required
				/>

				<Label>Assign To:</Label>
				<Select
					value={assignedTo}
					onChange={(e) => {
						setAssignedTo(e.target.value);
					}}
				>
					<option value="" disabled>
						Select a flatmate
					</option>
					{flatmates.map((flatmate: any) => (
						<option key={flatmate.id} value={flatmate.id}>
							{flatmate.name}
						</option>
					))}
				</Select>

				<Button type="submit">Add Task</Button>
			</form>
		</FormContainer>
	);
};

export default AddTask;
