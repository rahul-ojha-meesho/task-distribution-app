import styled from "styled-components";

// Container for the form
export const FormContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	background: #f9f9f9;
	border: 1px solid #ddd;
	border-radius: 5px;
`;

// Styled input fields
export const Input = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 10px;
`;

// Styled label
export const Label = styled.label`
	display: block;
	font-weight: bold;
	margin-bottom: 5px;
`;

// Styled select (dropdown)
export const Select = styled.select`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 10px;
`;

// Styled button
export const Button = styled.button`
	padding: 10px 20px;
	background: #0070f3;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background 0.3s;

	&:hover {
		background: #005bb5;
	}
`;
