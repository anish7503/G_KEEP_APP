import React from 'react';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

const Header = () => {
  return (
    <header className='header'>
        <NoteAltIcon className='icon'/>
        <h1> Google Keep</h1>
    </header>
  )
}

export default Header;
