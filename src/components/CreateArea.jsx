import React, { useState } from "react";

function CreateArea(props) {
	const [inputNote, setInputNote] = useState({ title: "", content: "" });

	function handleChange(event) {
		const { value, name } = event.target;
		setInputNote((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	}

	function handleAddClick(event) {
		event.preventDefault();
		props.createNote(inputNote);
		setInputNote({ title: "", content: "" });
	}

	return (
		<div>
			<form>
				<input
					onChange={handleChange}
					name="title"
					placeholder="Title"
					value={inputNote.title}
				/>
				<textarea
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows="3"
					value={inputNote.content}
				/>
				<button onClick={handleAddClick}>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
