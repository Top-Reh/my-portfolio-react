import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Blogst = ({ blogs, setDeleted, setBlogs }) => {
  const { id } = useParams();
  const post = blogs.find(posts => posts.id.toString() === id);

  const navigate = useNavigate();

  const handleDeleteBtn = (id) => {
    const deleteBlog = blogs.filter(gg => gg.id !== id);
    setBlogs(deleteBlog);
    navigate('/');
  }

  return (
    <div>
      {post ? (
        <div className="postcourse">
          <h1>{post.name}</h1>
          <p>{post.bio}</p>
          <button onClick={() => handleDeleteBtn(post.id)}>Delete</button>
        </div>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
}

export default Blogst;
