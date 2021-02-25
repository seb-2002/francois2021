import './image.scss';

function Image ({img}) {
 const {src, alt} = img

 return (
<div className="img--home">
  <img src={src} alt={alt}/>
</div>
 )
}

export default Image;