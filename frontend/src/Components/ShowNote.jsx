

import React, { useState } from 'react';
import NoteCard from './NoteCard';
import Modal from './Modal';
import NoteView from '../Pages/NoteView';

const notes = [
  { id: 1, title: 'Title 1', content: 'Note 1 Lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis unde commodi sed aliquid enim nihil magni architecto id, porro nobis temporibus, incidunt, iusto blanditiis explicabo eos deleniti natus at. Nihil!' },
  { id: 2, title: 'Title 2', content: 'Note 2 Lorem ipsum' },
];
const ShowNote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  return (
    <div className='w-full mt-14 flex justify-center -ml-20'>
      <div className='grid grid-cols-5 gap-1'>
        {notes.map(note => (
          <NoteCard key={note.id} note={note} onClick={() => handleNoteClick(note)} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedNote && <NoteView note={selectedNote} />}
      </Modal>
    </div>
  );
};

export default ShowNote;
