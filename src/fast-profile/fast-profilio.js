import React, {useState} from "react";
import '../style.css'

export default function Profiliofast() {
    function PhotoCropping({ imagelinks, setImagelinks,setShowPhotoCropping ,setShowPhotoChoices ,setshowprofile}) {
        const handleSubmit = () => {
          console.log('link:', imagelinks);
          setShowPhotoCropping(false);
          setShowPhotoChoices(false);
          setshowprofile(true);
        };
        return (
          <div className='photoCrop'>
            <input 
              placeholder='Paste your link here' 
              id='imagelink' 
              value={imagelinks}
              onChange={(e) => setImagelinks(e.target.value)}
            ></input>
            <button onClick={handleSubmit} >Save</button>
            <div className='imgPlace'>
              <img src={imagelinks}></img>
            </div>
          </div>
        )
      }
      
    function PhotosChoice({ handleBrowserLinkClick }) {
    
    return(
        <div className='photochoises'>
        <button onClick={handleBrowserLinkClick}><a href='https://www.google.com/' target='_blank'>From Online</a></button><hr></hr>
        <button onClick={handleBrowserLinkClick}><a href='https://www.pinterest.com/' target='_blank'>From pinterest</a></button><hr></hr>
        <button onClick={handleBrowserLinkClick}><a href='https://photos.google.com/apps' target='_blank'>From galleary</a></button>
        </div>
    )
    }
      
    function TheProfile({imagelinks,name,email}) {
    return(
        <div className='theprofile'>
        <img src={imagelinks}></img>
        <h2>{name}</h2>
        <p>{email}</p>
        <img src='https://th.bing.com/th/id/OIP.Js4yjIIPjXFevbti-lhO2gHaHa?rs=1&pid=ImgDetMain' className='qrcode'></img>
        </div>
    )
    }
      
    function ProfilioLoginPage() {
    const [showPhotoChoices, setShowPhotoChoices] = useState(false);
    const [showPhotoCropping, setShowPhotoCropping] = useState(false);
    const [showprofile, setshowprofile] = useState(false);
    const [imagelinks, setImagelinks] = useState('');
    const [name,setname] = useState('');
    const [email,setemail] = useState('')
    
    const handlePhotoLinkClick = () => {
        setShowPhotoChoices(prevState => !prevState);
    };
    const handleBrowserLinkClick = () => {
        setShowPhotoCropping(prevState => !prevState);
    }
    const [format,setFormat] = useState({
        name:'',
        value:'',
        firstName:'',
        lastName:'',
        checkbox:'',
    })
    
    const handleinputs = (event) => {
        const {name,type,value} = event.target
        setFormat(prevformat => {
        return {
            ...prevformat,
            [name]:type === 'checkbox' ? 'checked' : [value]
        }
        })
        
    }
    console.log(format.firstName)
    console.log(format.lastName)
    console.log(format.checkbox==='checked' ? 'true' : 'false')
    
    return (
        <div className='container'>
            <div>
                <h1>Create a perfect profile page</h1>
                <input className='username' placeholder='Username' value={name} onChange={(e) => setname(e.target.value)}></input>
                <input className='email' placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)}></input>
                <input className='password' placeholder='Password' type='password'></input>
                <button className='photoLink' onClick={handlePhotoLinkClick}>Take a photo</button>
                {showPhotoChoices && <PhotosChoice handleBrowserLinkClick={handleBrowserLinkClick}/> }
                {showPhotoCropping && <PhotoCropping imagelinks={imagelinks} setImagelinks={setImagelinks} setShowPhotoCropping={setShowPhotoCropping} setShowPhotoChoices={setShowPhotoChoices} setshowprofile={setshowprofile}/>}
                {showprofile && <TheProfile imagelinks={imagelinks} name={name} email={email}/>}
            </div>
        </div>
    )
    }
    return(
        <ProfilioLoginPage/>
    )
}