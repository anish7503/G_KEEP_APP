import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Note = (props) => {

    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setNote((old) => {
            return { ...old, [name]: value };
        });
    }

    return (
        <div>
            <div className="note_container">
                <div className="note_div">
                    <form action="">
                        <input onDoubleClick={() => setExpand(false)} onClick={() => setExpand(true)} type="text" name="title" onChange={inputEvent} value={note.title} placeholder='Title' autoComplete='off' />

                        {expand ? (
                            <>
                                <textarea rows="5" column="" name="content" onChange={inputEvent} value={note.content} placeholder="Write Something" />
                                <Button className="btn" onClick={() => {
                                    props.pass(note)
                                    setNote({
                                        title: "",
                                        content: "",
                                    });
                                }}><AddIcon /></Button>
                            </>
                        ) : null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Note
