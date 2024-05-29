import React from 'react';

const WriteNote = () => {
  return (
    <div className="w-screen mt-16 flex flex-row justify-center ">
      <div className="container mx-4 w-2/5">
        <form>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Enter your note here..."
            rows={4}
            cols={50}
          />
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            type="submit"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteNote;
