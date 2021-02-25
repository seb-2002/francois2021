import './box.scss';
import BoxContent from './boxContent';
import {AiOutlineArrowDown} from 'react-icons/ai'
const classNames = require('classnames') 

function Box (props) {
  const {selected, content, title, onClick, id} = props;
  const {flipside} = content;
  const boxClass = classNames("box",
  {"box--notSelected": !selected && !flipside},
  {"box--flipside--notSelected": flipside && !selected},
   {"box--selected" : selected},
  {"box--flipside": flipside && selected} );

  if(selected){

    return (
      <div className={boxClass} >
        <BoxContent id={id} clickHandler={onClick}title={title} content={content}/>
      </div>
    )


  } else {
    return (
      <div className={boxClass} onClick={()=>onClick(id)}>
        <h2 className="boxTitle">{title}</h2>
        <AiOutlineArrowDown class="downArrow"/>
      </div>
    )


  }
}

export default Box;