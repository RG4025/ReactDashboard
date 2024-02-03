import React, { useState } from 'react'
import { useNote } from '../NotesContext/NotesContextOne'

function NoteForm() {
    const [Note, setNote] = useState("")
    const {addNote} = useNote()

    const add = (e) => {
      e.preventDefault()

      if (!Note) return

      addNote({ Note, completed: false})
      setNote("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
          style={{borderRadius:"5px 0px 0px 5px"}}
              type="text"
              placeholder="Write Your Notes.."
              className="w-full border border-light rounded-left  px-3 outline-none  bg-secondary py-2"
              value={Note}
              onChange={(e) => setNote(e.target.value)}
          />
          <button type="submit" className="border border-black/10 rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default NoteForm;