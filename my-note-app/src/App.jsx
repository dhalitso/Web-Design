import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./pages/Notes"
import Editnote from "./pages/EditNote"
import CreateNote from "./pages/CreateNote"
import dummyNotes from './dummy_notes'

import { useState } from "react";

export const App = () => {
  const[notes, setNotes] = useState(dummyNotes)

  return (
    <main id="app">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Notes notes={notes}/>} />
      <Route path="/create-note" element={<CreateNote/>} />
      <Route path="/edit-note/:id" element={<Editnote/>} />
    </Routes>
    </BrowserRouter>
    </main>
  )
}
