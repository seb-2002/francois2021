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
    statusEn,
    statusFr, 
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

  function toggleAll() {
   if (showTextEn || showTextFr || showVideo) {
     setState(initialState)
   } 
   else {
     const newState = {
      //  showTextEn: textEn && introTextEn ? true : false,
      showTextEn: true,
       showTextFr: true,
       showVideo: true,
     }
     setState(newState);
   }
  }
  // function toggleAll(id) {
  //  if (showTextEn || showTextFr || showVideo) {
  //    clickHandler(id);
  //  } 
  //  else {
  //    const newState = {
  //     //  showTextEn: textEn && introTextEn ? true : false,
  //     showTextEn: true,
  //      showTextFr: true,
  //      showVideo: true,
  //    }
  //    setState(newState);
  //  }
  // }



  return (
    <>

   {flipside && 
   <h2 className="flipside" onClick={()=>clickHandler(id)}>{flipside} </h2>
   }

   {contact &&
   <> 
   <h2 className="flipside contact--phone" >{contact.name}<br></br>@{contact.domain}</h2>
   <h2 className="flipside contact--desktop" >{contact.name}@{contact.domain}</h2>
   </>
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
    <AiOutlineArrowDown className="arrow"/>
    </div>
   }

  {img && <img className="principle_img" onClick={()=>toggleAll()} src={img} alt={alt}/>}
   <div className="boxContent--body">

   
  {header &&
    <p className="header">
      {header}
    </p>
  }


  {textFr && introTextFr &&
  <p className="introText" onClick={()=>toggleTextFr()}>
    (fr) {introTextFr} ( ... )
    </p>}

  

   {textFr && showTextFr &&
   <div className="text">
      <p className="text">
        {textFr}
      </p>
    {statusFr &&
      <p className="status">
        {statusFr}
      </p>
    }
   </div>
  }

  {textEn && introTextEn && 
    <p className="introText introText--En" onClick={()=>toggleTextEn()}>
      (en) {introTextEn} ( ... )
    </p>
  }

  {textEn && showTextEn &&
    <div className="text">
    <p className="text">
      {textEn}
    </p>
    {statusEn &&
      <p className="status">
        {statusEn}
      </p>
    }
    </div>
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