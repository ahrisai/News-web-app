import React,{FC,useState} from 'react'
import paginationStyles from './Pagination.module.css'
interface PaginationProps{
    totalPages:number
}


const Pagination:FC<PaginationProps> = ({totalPages}) => {
    const [currentPage, setcurrentPage] = useState<number>(1)

    
    

  return (
    <div className={paginationStyles.pagesList}>
        {[...Array(totalPages)].map((_,index)=><button className={paginationStyles.pageButton} key={index}>{index+1}</button>)
        }
    </div>
  )
}

export default Pagination