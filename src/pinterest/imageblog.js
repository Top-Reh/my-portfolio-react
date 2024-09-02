import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import pinterestData from './pinterestData';

const Overlay = styled.div`
    
      display: ${({ ishover }) => (ishover ? 'flex' : 'none')};
      transition: 'display 1s ease',
    `;

const ImageContainer = styled.div`
  &:hover ${Overlay} {
    display: flex;
  }
`;



const Imageblog = ({imgsize}) => {
    const [hoverid,sethoverid] = useState(null);
    const [isSave,setIsSave] = useState('Save');
    const [isClicked,setIsClicked] = useState(false);
    const [saveIds,setSaveIds] = useState({});

    const Savebtn = styled.button`
      background-color: ${({status}) => (status === 'Save' ? 'red' : 'black')};
    `;

    const handleSave = (id) => {
      
      if (!saveIds[id]) {
        setSaveIds((pre) => ({ ...pre,[id]:'Saving...'}));
        setTimeout(() => {
          setSaveIds((pre) => ({ ...pre,[id]: 'Saved'}));
        }, 3000);
      } else {
        alert('You already saved that photo');
      }
    };

    const handleMouseEnter = (id) => {
      sethoverid(id);
  };

  const handleMouseLeave = () => {
    sethoverid(null);
  };

  return (
    <div className='imggrid'>
      {pinterestData.map((user) => (
          <ImageContainer key={user.id} className={`userchoice ${user.boards[0].pins[0].size}`} onMouseEnter={() => handleMouseEnter(user.id)} 
          onMouseOut={handleMouseLeave}>
            <img src={user.boards[0].pins[0].imageUrl} ></img>
            <Overlay className='overlay' ishover={hoverid === user.id}>
              <Savebtn onClick={() => handleSave(user.id)} isClicked={saveIds[user.id]==='saved'} status={saveIds[user.id] || 'Save'}>{saveIds[user.id] || 'Save'}</Savebtn>
              <div className='saveandmore'> 
                <div className='idiv'><i class="bi bi-upload"></i></div>
                <div className='idiv'><i class="bi bi-three-dots"></i></div>
              </div>
            </Overlay>
            <div className='profileinfo'>
              <img src={user.profileImage} className='profiles'></img>
              <h5>{user.username}</h5>
            </div>
          </ImageContainer>
        ))}
    </div>
  )
}

export default Imageblog
