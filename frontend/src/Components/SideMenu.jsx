import React from 'react';
import { Archive, Bell, Gear, Pencil, Soundwave, Tag, Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const menuItems = [
    { icon: <Soundwave />, text: 'Notes', link: '/NoteWave/notes' },
    { icon: <Bell />, text: 'Remind me', link: '/NoteWave/remind' },
    { icon: <Pencil />, text: 'Write Wave', link: '/NoteWave/new' },
    { icon: <Tag />, text: 'Tags' },
    { icon: <Archive />, text: 'Archive' },
    { icon: <Trash />, text: 'Trash' },
    { icon: <Gear />, text: 'Settings' },
  ];

  return (
    <div className='mt-20 left-0 w-64 h-screen pt-3 fixed text-white bg-gray-900'>
      {menuItems.map((item, index) => (
        <MenuItem key={index} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </div>
  );
};

const MenuItem = ({ icon, text, link }) => {
  const content = (
    <div className='flex flex-row items-center hover:bg-blue-700 cursor-pointer'>
      <div className='sidebar-icon'>{icon}</div>
      <span className='ml-5'>{text}</span>
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
};

export default SideMenu;
