import React, { useState } from 'react'
import styled from 'styled-components';
import Pinmenu from './pinmenu';

const Pincreate = ({setFirstHome,setMenuData}) => {
  const [clickedskip,setClickedskip] = useState(false);

  const Createnew = styled.div`
    width: ${({clickedskip}) => (clickedskip ? '30%' : '6%')};
    transition: 1s width ease-in-out;
  `

  function skipclick() {
    setClickedskip(!clickedskip);
  }

  return (
    <div className='create'>
      <Pinmenu  setFirstHome={setFirstHome} setMenuData={setMenuData}/>
      <div className='creating'>
        <Createnew className='createNew' clickedskip={clickedskip}>
          
          
          {clickedskip ? <div className='pindrafts createIcons'>
            <div className='pindraftsheader'>
              <h5>Pin drafts</h5>
              <i className="bi bi-chevron-double-left" onClick={skipclick} clickedskip={clickedskip}></i>
            </div>
            <button>Create new</button>
          </div> : <div className='createIcons'>
            <i className="bi bi-chevron-double-right" onClick={skipclick} clickedskip={clickedskip}></i>
            <i className="bi bi-plus-lg"></i>
          </div>}
        </Createnew>
        <div className='createPin'>
          <div className='header'>Create Pin</div>
          <div className='newPost'>
            <div className='imageurlpost'>
              <div className='imgupload'>
                <i className="bi bi-arrow-up-circle-fill"></i>
                <p>Chose a file or drag and drop </p>
                <p className='lastp'>it here</p>
                <footer>We recommend using high-quality .jpg files less than 20MB </footer>
                <footer>or .mp4 files less than 200MB</footer>
              </div>
              <div className='saveurlbtn'>
                <button className='saveUrl'>Save from URL</button>
              </div>
            </div>
            <div className='facts'>
              <table>
                <label>Title</label>
                <input placeholder='Add a title'></input>
                <label>Description</label>
                <textarea placeholder='Add a detailed description'></textarea>
                <label>Link</label>
                <input placeholder='Add a link'></input>
                <label>Board</label>
                <input placeholder='Choose a board'></input>
                <label>Tagged topics</label>
                <input placeholder='Search for a tag'></input>
                <p>Don't worry, people won't see your tags</p><br/>
                <label>Tag produsts</label><br/>
                <button className='addproduct'>Add products</button>
                <div className='moreoptions'>More options<i className="bi bi-chevron-down"></i></div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pincreate
