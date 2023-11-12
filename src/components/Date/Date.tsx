import React, { useEffect, useState,FC } from 'react'
import { formatDate } from '../../utility/formatDate'

const DateTime:FC= () => {

  

    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
      
    setInterval(() => {
        const nextDate=new Date()
        nextDate.setSeconds(nextDate.getSeconds()+1)
        
        setDate(nextDate)
    }, 1000);
     
    }, [])
    
  return (
    <div>
        <p style={{fontSize:14}}>Today is {formatDate(new Date())} </p>
    </div>
  )
}

export default DateTime