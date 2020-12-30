import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);

	function createNote(note) {
		setNotes((prevNotes) => {
			return [...prevNotes, note];
		});
	}

	function deleteItem(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((note, noteIndex) => noteIndex !== id);
		});
	}

	return (
		<div>
			<Header />
			<CreateArea createNote={createNote} />
			{notes.map((noteItem, noteIndex) => (
				<Note
					key={noteIndex}
					id={noteIndex}
					title={noteItem.title}
					content={noteItem.content}
					deleteItem={deleteItem}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
