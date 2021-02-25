import './boxContent.scss';
import Credits from './credits';
import {AiOutlineArrowDown} from 'react-icons/ai'

import {useState} from 'react';

function BoxContent(props) {
  const {content, title, clickHandler, id} = props
  const {
    flipside,
    header,
    img,
    introTextFr,
    textFr, 
    introTextEn,
    textEn, 
    credits, 
    video, 
    videoTitle, 
    alt, 
    status, 
    show, 
    bioFr, 
    bioEn,
    contact,
      } = content


  const initialState = {
    showTextFr: false,
    showTextEn: false,
    showVideo: false,
  }

  const [state, setState] = useState(initialState);

  const {showTextFr, showTextEn, showVideo} = state;

  function toggleTextFr() {
    console.log('Click!');
    const show = showTextFr;
    const newState = {...state, showTextFr: !show}
    setState(newState);
  }

  function toggleTextEn() {
    console.log('Click!');
    const show = showTextEn;
    const newState = {...state, showTextEn: !show}
    setState(newState);
  }

  function toggleVideo() {
    console.log('Click!');
    const show = showVideo;
    const newState = {...state, showVideo: !show}
    setState(newState);
  }



  return (
    <>

   {flipside && 
   <h2 className="flipside" onClick={()=>clickHandler(id)}>{flipside} </h2>
   } 
   {contact && 
   <h2 className="flipside" >{contact} </h2>
   } 

   {show &&
   <div className="selectedTitle" onClick={()=>clickHandler(id)}>
    <h2 >
      {show}
    </h2>
    <AiOutlineArrowDown/>
    </div>
   }

  

   {content.title &&
      <div onClick={()=>clickHandler(id)} className="selectedTitle">
    <h2 >
      {content.title}
    </h2>
    <AiOutlineArrowDown/>
    </div>
   }

  {img && <img className="principle_img" src={img} alt={alt}/>}
   <div className="boxContent--body">

   
  {header &&
    <p className="header">
      {header}
    </p>
  }
  {status &&
    <p className="status">
      {status}
    </p>
  }

  {textFr && introTextFr && 
  <p className="introText" onClick={()=>toggleTextFr()}>
    (fr) {introTextFr} (...)
    </p>}

   {textFr && showTextFr &&
  <p className="text">
    {textFr}
  </p>
  }

    {textEn && introTextEn && 
    <p className="introText" onClick={()=>toggleTextEn()}>
      (en) {introTextEn} (...)
      </p>}
  {textEn && showTextEn &&
  <p className="text">
    {textEn}
  </p>
  }

  {video && videoTitle &&
  <p className="videoTitle">

    <span onClick={() => toggleVideo()}className="button">
    {videoTitle}
    </span>
  </p> 
  }
  
  {video && videoTitle && showVideo &&
  <iframe title={videoTitle} src={video} className="video" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  }

   {credits && 
   <Credits credits={credits}/>
   }


  {bioFr &&
  <p className="bio bioFr">
    (fr) {bioFr}
  </p>
  }

  {bioEn &&
  <p className="bio bioEn">
    (en) {bioEn}
  </p>
  }

  </div>
    </>
  )
}

export default BoxContent;