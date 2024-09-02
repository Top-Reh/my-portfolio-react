import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HomeBlog from './homeBlog';

const Posts = ({datalink, setImageSrc, setTitle, setContent,}) => {
  const { id } = useParams();
  const [randomPosts,setRandomPosts] = useState('');

  useEffect (() => {
    if (datalink && datalink.length > 0) {
      // Shuffle and slice the datalink array to get four random posts
      const shuffledPosts = [...datalink].sort(() => 0.5 - Math.random());
      setRandomPosts(shuffledPosts.slice(0, 4));
    }
  }, [datalink]);

  if (!datalink || datalink.length === 0) {
    return <div>No posts available{id}</div>
  }

  const post = datalink.find(e => e.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>
  }

  const featuredImage = post._embedded ? post._embedded['wp:featuredmedia'][0].source_url : 'default-image-url';

  return (
    <div className='posts'>
      <h1>{post.title.rendered}</h1>
      <p className='time'>{post.date}</p>
      <img src={featuredImage} alt='post image' className='bigimg postimgs' />
      <div className='posttext' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <div className='youMightLike'>
        <h2>You might also like</h2>
        <HomeBlog datalink={randomPosts} setImageSrc={setImageSrc} setTitle={setTitle} setContent={setContent} isInpost={true}/>
      </div>
    </div>
  )
}

export default Posts;
