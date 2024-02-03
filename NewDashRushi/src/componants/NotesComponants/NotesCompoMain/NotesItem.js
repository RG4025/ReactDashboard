import React, { useState } from 'react'
import { useNote } from '../NotesContext/NotesContextOne'

function NoteItem({ Note }) {
  const [isNoteEditable, setIsNoteEditable] = useState(false)
  const [NoteMsg, setNoteMsg] = useState(Note.Note)
  const {updateNote, deleteNote, toggleComplete} = useNote()

  const editNote = () => {
    updateNote(Note.id, {...Note, Note: NoteMsg})
    setIsNoteEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(Note.id);
    toggleComplete(Note.id)
  }

  return (
      <div style={{borderRadius:"5px 5px 5px 5px"}}
          className={`flex h-full w-full  px-3 py-1 fs-6 gap-x-3 shadow-sm shadow-white/50  text-black  ${
              Note.completed ? "bg-[#c6e9a7]" : "bg-[#DEE2E6]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={Note.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none   w-full bg-transparent rounded-lg ${
                  isNoteEditable ? "border-black/10 px-2" : "border-transparent"
              } ${Note.completed ? "line-through" : ""}`}
              value={NoteMsg}
              onChange={(e) => setNoteMsg(e.target.value)}
              readOnly={!isNoteEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (Note.completed) return;

                  if (isNoteEditable) {
                      editNote();
                  } else setIsNoteEditable((prev) => !prev);
              }}
              disabled={Note.completed}
          >
              {isNoteEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Note Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteNote(Note.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default NoteItem;