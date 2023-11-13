import { FC } from 'react'
import ImageStyles from './ImageWrapper.module.css'
interface ImageWrapperProps{
    image:string,
    imgStyles?:string
}
const ImageWrapper:FC<ImageWrapperProps> = ({image,imgStyles}) => {


  return (
 image
 ?<img src={image} alt="news" className={imgStyles!==undefined?imgStyles:ImageStyles.image}/>
 :<div className={ImageStyles.wrapper}></div>
 
  )
}

export default ImageWrapper