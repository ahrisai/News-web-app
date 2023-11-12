export const formatTimeAgo = (dateString:string) => {
    const now=new Date()
    const date=new Date(dateString)
    
    const secondPast:number=(now.getTime()-date.getTime())/1000

    if(secondPast<60){
        return `${Math.round(secondPast)}s ago`
    }
    if(secondPast<3600){
        return `${Math.round(secondPast/60)}m ago`

    }
    if(secondPast<86400){
        return `${Math.round(secondPast/36000)}h ago`
    }
    if(secondPast>86400){
        const day:number=Math.round(secondPast/86400)
        return day===1?`${day} day ago`:`${day} days ago`
    }

}