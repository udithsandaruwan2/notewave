import React from 'react';
import { Archive, Bell, Floppy, Image, Palette } from 'react-bootstrap-icons';

const WriteNote = () => {
  return (
    <div className="w-full mt-24 flex justify-center -ml-32">
      <div className="container mx-4 w-2/5">
        <form>
          <div className='border border-solid border-gray-800 rounded-lg border-opacity-100 shadow-lg'>
          <textarea
            className="w-full p-2 border rounded text-2xl border-none focus:outline-none focus:border-transparent mt-1 bg-transparent text-white"
            placeholder="Title"
            rows={1}
            cols={50}
          />
          <hr className='gray-800'/>
          <textarea
            className="w-full p-2 border rounded border-none focus:outline-none focus:border-transparent bg-transparent text-white"
            placeholder="Enter your note here..."
            rows={4}
            cols={50}
          />
          
          <div className='flex flex-row justify-between m-2'>
            <div className='justify-start'>
              <NoteBoxIcon icon={<Floppy/>}/>
            </div>
              <div className='flex flex-rowmr-2 mr-2 justify-end'>
               <NoteBoxIcon icon={< Archive/>}/>
                <NoteBoxIcon icon={< Palette/>}/>
                <NoteBoxIcon icon={< Image/>}/>
                <NoteBoxIcon icon={< Bell/>}/>
              </div>
            </div>
            </div>       
          <br />

        </form>
      </div>
    </div>
  );
};

const NoteBoxIcon =({icon}) =>(
  <div className='header-icon'>
    {icon}
  </div>
)

export default WriteNote;


