import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AllAboutpf from './allaboutpf';
import Aboutpf from './aboutpf';
import Profilio from './profilio';
import Contactme from './contactme';
import All from './all';
import './myprofilio.css';
import Dice from '../dice.js';
import MainBlog from '../zeagwat/mainBlog.js';
import HomeBlog from '../zeagwat/homeBlog';
import Posts from '../zeagwat/posts';
import Blogs from '../zeagwat/blogs';
import Profiliofast from '../fast-profile/fast-profilio.js';
import Container from '../react-course-making-test/container.js';
import Home from '../react-course-making-test/home';
import Postst from '../react-course-making-test/posts';
import Missing from '../react-course-making-test/missing';
import '../react-course-making-test/course.css';
import Blogst from '../react-course-making-test/blogs';
import New from '../react-course-making-test/newjeans.js'

const Myprofilio = () => {
  const [datalink, setDatalink] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [searchresult,setSearchResult] = useState('');

  const [blogs,setBlogs] = useState([
    {
        id:0,
        name:'First blog',
        bio:'slkao awjioso asjfol fhwoijff'
    },{
        id:1,
        name:'Second blog',
        bio:'slkao awjioso asjfol fhwoijff'
    },{
        id:2,
        name:'Third blog',
        bio:'slkao awjioso asjfol fhwoijff'
    },{
        id:3,
        name:'Fourth blog',
        bio:'slkao awjioso asjfol fhwoijff'
    },
]);

  const navigate  = useNavigate ();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.zeagwat.com/wp-json/wp/v2/posts/?_embed');
        const data = await response.json();
        const image = data[0]._embedded['wp:featuredmedia'][0].source_url;
        setImageSrc(image);
        setDatalink(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  function handleDelete(id) {
    const deleteBlog = blogs.filter(gg => gg.id !== id);
    setBlogs(deleteBlog);
    navigate ('/')
  }

  if (!datalink) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<All/>}/>
          <Route path="/about" element={<Aboutpf/>}/>
          <Route path="/profilio" element={<Profilio/>}/>
          <Route path="/contact"  element={<Contactme/>}/>
          <Route path="/dice"  element={<Dice/>}/>
          <Route path="/mainBlog"  element={<MainBlog datalink={datalink} setImageSrc={setImageSrc} setTitle={setTitle} setContent={setContent}/> }/>
          <Route exact path="/" element={<HomeBlog  datalink={datalink} setImageSrc={setImageSrc} setTitle={setTitle} setContent={setContent}/>} />
          <Route path="/posts/:id" element={<Posts  datalink={datalink} setImageSrc={setImageSrc} setTitle={setTitle} setContent={setContent}/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/profiliofast" element={<Profiliofast/>} />
          <Route exact path="/" element={<Home blogs={searchresult}/>} />
          <Route exact path="/postst" element={<Postst blogs={blogs}/>} />
          <Route exact path="/blogst/:id" element={<Blogst blogs={blogs} setBlogs={setBlogs} setDeleted={handleDelete}/>} />
          <Route path='/new' element={<New blogs={blogs} setBlogs={setBlogs}/>}/>
          <Route path="*" element={<Missing />} />
          <Route path="/container"  element={<Container/>}/>
        </Routes>
    </div>
  )
}

export default Myprofilio
