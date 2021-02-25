import Box from './box';
import './boxList.scss'

function BoxList(props) {
  const {boxes, clickHandler} = props

  function makeBoxList (boxes, clickHandler) {
    if (boxes) {

      const boxList = boxes.map((box, index) => {
        
        const {title, selected, content} = box;
   
        return(
      
            < Box selected={selected} key={index} id={index} onClick={clickHandler} title={title} content={content}
            />
          
        )
      });

return boxList;

  } else {
    
    return (
      <div className="loadingBox">
        Loading
      </div>
      )
    }

  }  


  return (
    <div className="boxList">
    {makeBoxList(boxes, clickHandler)}
    </div>
  );
}

export default BoxList;