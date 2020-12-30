import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
	const [inputNote, setInputNote] = useState({ title: "", content: "" });
	const [visibility, setVisibility] = useState(false);

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
		if (inputNote.title && inputNote.content) {
			props.createNote(inputNote);
			setInputNote({ title: "", content: "" });
			setVisibility(false);
		}
	}

	function handleTextClick() {
		setVisibility(true);
	}

	return (
		<div>
			<form className="create-note">
				{visibility && (
					<input
						onChange={handleChange}
						name="title"
						placeholder="Title"
						value={inputNote.title}
					/>
				)}
				<textarea
					onClick={handleTextClick}
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows={!visibility ? "1" : "3"}
					value={inputNote.content}
				/>
				<Zoom in={visibility}>
					<Fab onClick={handleAddClick}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
