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

	return (
		<div>
			<Header />
			<CreateArea createNote={createNote} />
			{notes.map((noteItem, noteIndex) => (
				<Note
					key={noteIndex}
					title={noteItem.title}
					content={noteItem.content}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
