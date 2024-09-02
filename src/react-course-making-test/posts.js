import React from 'react'

const Postst = ({post,key}) => {
  return(
    <div className='postcourseshowed'>
        <h1>{post.name}</h1>
        <p>{post.bio}</p>
    </div>
)
}

export default Postst
