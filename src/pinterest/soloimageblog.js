import React,{useState} from 'react';
import pinterestData from './pinterestData';
import Pinhome from './pinhome';
import { useParams } from 'react-router-dom';
import Pinimageblog from './pinimageblog';
import Pinmenu from './pinmenu';

function Soloimageblog({menuData,setMenuData,setFirstHome}) {
  const {id} = useParams();
  const post = pinterestData.find(blog => blog.id === id);

  return (
    <div className='soloImage'>
      <Pinmenu  setFirstHome={setFirstHome} setMenuData={setMenuData}/>
      <div className='oneimage'>
        <img src={post.boards[0].pins[0].imageUrl} className='choseimg'></img>
        <div className='factsAndCom'>
          <div className='headericonsone'>
            <i className="bi bi-heart"></i>
            <span>2.3k</span>
            <i className="bi bi-upload"></i>
            <i className="bi bi-three-dots"></i>
            <span className='profileone'>Profile</span>
            <i className="bi bi-chevron-down ardownone"></i>
            <button>Save</button>
          </div>
          <div className='profileInfo'>
            <div className='profilenameone'>
              <img src={post.profileImage} className='profileone'></img>
              <span>{post.username}</span>
            </div>
            <button>
              Follow
            </button>
          </div>
          <div className='comments'>
            <span>19 comments</span>
            <i className="bi bi-chevron-down "></i>
          </div>
          <input className='writecom' placeholder='Add a comment'>
          
          </input>
          <i className="bi bi-emoji-smile-fill smileone"></i>
        </div>
      </div>
      <Pinhome menuData={menuData}/>
    </div>
  )
}

export default Soloimageblog
