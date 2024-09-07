import React from 'react';
import { Link } from 'react-router-dom';
import Postst from './posts';

const Home = ({blogs}) => {

    function handleClick() {
       return(
        <Link to='/blogst' ></Link>
       ) 
    }
    
    function Post({post,key}) {
        
        return(
            <div >
                <h1>{post.name}</h1>
                <p>{post.bio}</p>
            </div>
        )
    }

  return (
    <div className='homecomponent '>
      {blogs.length > 0 ? (blogs.map(post => (
        <Link key={post.id} name={post.id} to={`/blogst/${post.id}`} className='postlink'><Postst key={post.id} post={post} id={post.id}/></Link>
      ))) : <h1>No post is ariviable</h1>}
    </div>
  )
}

export default Home
