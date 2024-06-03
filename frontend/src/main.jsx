import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Remindme from './Pages/Remindme.jsx';
import NewNote from './Pages/NewNote.jsx';
import Notes from './Pages/Notes.jsx';

const router = createBrowserRouter([
  {
    path: "/NoteWave",
    element: <App/>,
    children : [
      {
        path: "remind",
        element: <Remindme/>,
      },
      {
        path: "new",
        element: <NewNote/>,
      },
      {
        path: "notes",
        element: <Notes/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

