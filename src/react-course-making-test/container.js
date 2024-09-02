import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route,Link, useParams,useNavigate  } from 'react-router-dom';
import Home from './home';
import Postst from './posts';
import Missing from './missing';
import './course.css';
import Blogst from './blogs';
import New from './newjeans.js'

const Container = () => {

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

    const [deleted,setDeleted] = useState('');
    const [searching,setSearching] = useState('');
    const [searchresult,setSearchResult] = useState('');
    const navigate  = useNavigate ();

    function handleDelete(id) {
      const deleteBlog = blogs.filter(gg => gg.id !== id);
      setBlogs(deleteBlog);
      navigate ('/')
    }

    useEffect(() => {
      const filtering = blogs.filter(post => (post.name).toLowerCase().includes(searching.toLowerCase())
      || (post.bio).toLocaleLowerCase().includes(searching.toLowerCase())
    );
    setSearchResult(filtering.reverse())
    },[blogs,searching])

  return (
    <div className='containercourse'>
      <div className='uppertag'>
        <h1>container</h1>
        <input placeholder='search' value={searching} onChange={(e) => setSearching(e.target.value)}></input>
        <input type='submit' className='inputsubmitcourse'></input>
        <div className='hmbtn'>            
            <button className='home'><Link to='/' className='btnlink'>Home</Link></button>
            <button className='home'><Link to='/new' className='btnlink'>new Posts</Link></button>
        </div>
      </div>
        <Routes>
          <Route exact path="/" element={<Home blogs={searchresult}/>} />
          <Route exact path="/posts" element={<Postst blogs={blogs}/>} />
          <Route exact path="/blogs/:id" element={<Blogst blogs={blogs} setBlogs={setBlogs} setDeleted={handleDelete}/>} />
          <Route path='/new' element={<New blogs={blogs} setBlogs={setBlogs}/>}/>
          <Route path="*" element={<Missing />} />
        </Routes>
    </div>
  );
}

export default Container;
