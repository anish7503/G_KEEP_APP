import React, { useState } from 'react';
import Header from './Components/Header';
import Note from './Components/Note';
import Keeper from './Components/Keeper';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const saveNote = (note) => {
    if(note.title !== "" || note.content !==""){
      setNotes((old) => { return [...old, note] });
    }
    else{
      alert("Type Something")
    }
  }

  const deleteELem = (id) => {
    setNotes((old) => {
      return old.filter((el, ind) => ind !== id);
    })
  }

  return (
    <>
      <div className="main_div">
        <Header />
        <Note pass={saveNote} />
        <Keeper notes={notes} deleteItem={deleteELem} />
        <Footer />
      </div>
    </>
  );
}

export default App;
