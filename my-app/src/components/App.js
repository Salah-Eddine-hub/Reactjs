import React from "react";
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"; 

function APP() {
    return (
      <div>
        <Header />
        {notes.map(noteItem => (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        ))}0
        <Footer />
      </div>
    );
  }

export default APP;