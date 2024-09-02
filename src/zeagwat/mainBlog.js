import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeBlog from './homeBlog';
import Posts from './posts';
import Blogs from './blogs';
import './zeagwat.css';

const MainBlog = () => {
  const [datalink, setDatalink] = useState(null);
  const [imageSrc,setImageSrc] = useState('');
  const [title,setTitle] = useState('');
  const [Content,setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.zeagwat.com/wp-json/wp/v2/posts/?_embed');
        const data = await response.json();
        const image = data[0]._embedded['wp:featuredmedia'][0].source_url;
        setImageSrc(image);
        setDatalink(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    /* {imageSrc && <img src={imageSrc} alt='post image' className='bigimg'/>}
        {datalink && <div dangerouslySetInnerHTML={{ __html: datalink[1].content.rendered }} />}
    */
    fetchData();
  }, []);

  return (
    
      <div>
        <Routes>
          <Route exact path="/" element={<HomeBlog setImageSrc={setImageSrc} datalink={datalink} setTitle={setTitle} setContent={setContent}/>} />
          <Route path="/posts/:id" element={<Posts datalink={datalink} setImageSrc={setImageSrc}  setTitle={setTitle} setContent={setContent}/>} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>

  );
};

export default MainBlog;
