import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const New = ({blogs,setBlogs}) => {
  const [thevaule,setThevalue] = useState('');
  const [theBio,setTheBio] = useState('');

  function setting(e) {
    setThevalue(e.target.value);
  }

  function biosetUp(e) {
    setTheBio(e.target.value);
  }

  function settingTheBlog() {
    setBlogs(prev => [
      ...prev,
      {
        id:blogs.length+1,
        name:thevaule,
        bio:theBio
      }
    ])
  }


  return (
    <div className='newjeans'>
      <h2>Name</h2>
      <input placeholder='type name'  onChange={setting}></input>
      <h2>Bio</h2>
      <textarea placeholder='type bio' onChange={biosetUp}></textarea>
      <button onClick={settingTheBlog}><Link to='/crhome'>Add</Link></button>
    </div>
  )
}

export default New
