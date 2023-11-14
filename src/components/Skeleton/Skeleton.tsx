import skeletonStyles from './Skeleton.module.css'
import {FC} from 'react'

interface SkeletonProps{
    count:number,
    type:'banner'|'item'
}

<<<<<<< HEAD
const Skeleton:FC<SkeletonProps> = ({count}) => {
=======
>>>>>>> 59a3c1e14fb054544441222ff5c0a5d0ad34ceb0
    
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