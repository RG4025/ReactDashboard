import {createContext, useContext} from "react"

export const NoteContext = createContext({
    notes: [
        {
            id: 1,
            Note: " Note msg",
            completed: false,
        }
    ],
    addNote: (Note) => {},
    updateNote: (id, Note) => {},
    deleteNote: (id) => {},
    toggleComplete: (id) => {}
})


export const useNote = () => {
    return useContext(NoteContext)
}

export const NoteProvider = NoteContext.Provider