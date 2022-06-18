import React from "react";
import Note from "./note.jsx";
import Head from "./header.jsx";
import Foot from "./footer.jsx";
import notes from "../notes.js";
function App() {
  return (
    <div>
      <Head />
      {notes.map(note=><Note key={note.key} name={note.title} content={note.content}/>)}
      <Foot />
    </div>
  );
}
export default App;
