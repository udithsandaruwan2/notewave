
import React from 'react';

const NoteView = ({ note }) => {
  return (
    <div className='p-4'>
      <h2 className='text-xl text-white mb-2'>{note.title}</h2>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-l text-white bg-gray-900 rounded-lg border border-gray-300 "
        placeholder="Write your thoughts here..."
        value={note.content}
        readOnly
      />
    </div>
  );
};

export default NoteView;
