import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import pinterestData from './pinterestData';
import Soloimageblog from './soloimageblog';
import { Link } from 'react-router-dom';

const Overlay = styled.div`
    
      display: ${({ ishover }) => (ishover ? 'flex' : 'none')};
      transition: 'display 1s ease',
    `;

const ImageContainer = styled.div`
  &:hover ${Overlay} {
    display: flex;
  }
`;

const Savebtn = styled.button`
      background-color: ${({status}) => (status === 'Save' ? 'red' : 'black')};
    `;


const Pinimageblog = ({menuData}) => {
    const [hoverid,sethoverid] = useState(null);
    const [isSave,setIsSave] = useState('Save');
    const [isclicked,setIsclicked] = useState(false);
    const [saveIds,setSaveIds] = useState({});

    
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
      {Array.isArray(menuData) && menuData.length > 0 ? ( menuData.map((user) => (
            <Link to={`/Soloimageblog/${user.id}`}>
              <ImageContainer key={user.id} className={`userchoice ${user.boards[0].pins[0].size}`} onMouseEnter={() => handleMouseEnter(user.id)} 
                onMouseOut={handleMouseLeave}>
                <img src={user.boards[0].pins[0].imageUrl} ></img>
                <Overlay className='overlay' ishover={hoverid === user.id}>
                  <Savebtn onClick={() => handleSave(user.id)} isClicked={saveIds[user.id]==='saved'} status={saveIds[user.id] || 'Save'}>{saveIds[user.id] || 'Save'}</Savebtn>
                  <div className='saveandmore'> 
                    <div className='idiv'><i className="bi bi-upload"></i></div>
                    <div className='idiv'><i className="bi bi-three-dots"></i></div>
                  </div>
                </Overlay>
                <div className='profileinfo'>
                  <img src={user.profileImage} className='profiles'></img>
                  <h5>{user.username}</h5>
                </div>
              </ImageContainer>
            </Link>  
        ))) : (
      <p>No data available</p>
      )}
    </div>
  )
}

export default Pinimageblog
