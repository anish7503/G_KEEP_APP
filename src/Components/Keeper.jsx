import React from 'react';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Keeper = (props) => {
  return (
    <>
      <div className="keeper_container">
        {props.notes.map((val, ind) => {
          return (
            <div className="keeper_div" key={ind}>
              <div className="heading">
                <h1> {val.title} </h1>
                <Button onClick={() => { props.deleteItem(ind) }}> <DeleteForeverIcon /></Button>
              </div>
              <p>{val.content}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Keeper
