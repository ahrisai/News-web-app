import skeletonStyles from './Skeleton.module.css'
import {FC} from 'react'

interface SkeletonProps{
    count:number,
    type:'banner'|'item'
}

const Skeleton:FC<SkeletonProps> = ({count}) => {
    
  return (
    <>
        {count>1?(
            <ul className={skeletonStyles.list}>
                {[...Array(count)].map((_,index)=>
                <li key={index} className={skeletonStyles.item}></li>
                )}
            </ul>
        ):<li  className={skeletonStyles.banner}> </li>
        }
    </>
  )
}

export default Skeleton