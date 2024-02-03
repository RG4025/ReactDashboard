import { useState, useEffect } from "react";
import { NoteProvider } from "./NotesContext/NotesContextOne";
// import './App.css'
import NoteForm from "./NotesCompoMain/NotesForm";
import NoteItem from "./NotesCompoMain/NotesItem";

function ThirdCompoNotes() {
  const [notes, setnotes] = useState([]);

  const addNote = (Note) => {
    setnotes((prev) => [{ id: Date.now(), ...Note }, ...prev]);
  };

  const updateNote = (id, Note) => {
    setnotes((prev) =>
      prev.map((prevNote) => (prevNote.id === id ? Note : prevNote))
    );
  };

  const deleteNote = (id) => {
    setnotes((prev) => prev.filter((Note) => Note.id !== id));
  };

  const toggleComplete = (id) => {
    //console.log(id);
    setnotes((prev) =>
      prev.map((prevNote) =>
        prevNote.id === id
          ? { ...prevNote, completed: !prevNote.completed }
          : prevNote
      )
    );
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes && notes.length > 0) {
      setnotes(notes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteProvider
      value={{ notes, addNote, updateNote, deleteNote, toggleComplete }}
    >
      <div className=" py-3 h-auto text-center d-flex justify-content-center align-items-center">
        <div className="notesWrapper   shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="fs-4 fw-bold text-center mb-4 mt-2">
            SAVE YOUR NOTES
          </h1>
          <div className="mb-4">
            {/* Note form goes here */}
            <NoteForm />
          </div>
          <div className="w-full flex flex-wrap gap-y-3">
            {/*Loop and Add NoteItem here */}
            {notes.map((Note) => (
              <div key={Note.id} className="w-100 h-100">
                <NoteItem Note={Note} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </NoteProvider>
  );
}

export default ThirdCompoNotes;
