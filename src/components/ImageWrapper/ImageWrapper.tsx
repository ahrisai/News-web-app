import React, { FC } from 'react'
import ImageStyles from './ImageWrapper.module.css'
interface ImageWrapperProps{
    image:string
}
const ImageWrapper:FC<ImageWrapperProps> = ({image}) => {


  return (
    <div className={ImageStyles.wrapper}>
        {image!='None'
        ?<img src={image} alt="news" className={ImageStyles.image}/>
        :null
        }
    </div>
  )
}

export default ImageWrapper