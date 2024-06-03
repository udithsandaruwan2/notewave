import React from 'react';
import { Pen } from 'react-bootstrap-icons';

const NoteCard = ({ note, onClick }) => {
  return (
    <div onClick={() => onClick(note)}>
      <div className="border-solid rounded-lg border border-gray-800 m-4 flex flex-grow shadow-lg cursor-pointer">
        <div className='w-auto min-w-60 max-w-64 h-auto p-4 overflow-hidden'>
          <span className='text-l text-white'>{note.title}</span>
          <br />
          <span className='text-white text-sm'>{note.content}</span>
          
        </div>
      </div>
    </div>
  );
};

const Icon = ({ icon }) => (
  <div className='icon'>
    {icon}
  </div>
);

export default NoteCard;
