import React,{useState} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeBlog = ({setImageSrc,datalink,setContent,setTitle,isInpost}) => {
  
    const truncateText = (htmlString, maxLength) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        const text = doc.body.textContent || "";
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
      };

      const handleClick = (post) => {
        setImageSrc(post._embedded['wp:featuredmedia'][0].source_url);
        setTitle(post.title.rendered);
        setContent(truncateText(post.content.rendered, 100)); // Adjust length as needed
      };
      if (!datalink) {
        return <div>Loading...</div>;
      }

    const Homediv = styled.div `
      display: grid;
      grid-template-columns:${ isInpost? 'repeat(2,1fr)' : 'repeat(3,1fr)'};
      gap: 20px;
      justify-content: center;
    `
  return (
    <Homediv > 
      {datalink.length > 0 ? (datalink.map(posts => ( 
        <Link to={`/posts/${posts.id}`} className='link' key={posts.id} onClick={() => handleClick(posts)} datalink={datalink}>
          <motion.div 
          className='blog' 
          whileHover={{scale:1.03}}
          transition={{duration:0.3}}
        >
          <img src={posts._embedded['wp:featuredmedia'][0].source_url} alt='post image' className='bigimg'/>
            {datalink &&
                <div className='facts'>
                    <h5>{truncateText(posts.title.rendered, 90)}</h5>
                    <p>{truncateText(posts.content.rendered, 76)}</p>
                </div>
            }
        </motion.div>
        </Link>
      ))) : (<h2>No post ariviable</h2>)}
    </Homediv>
  )
}

export default HomeBlog
