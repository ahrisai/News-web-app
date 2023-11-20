

export const formatDate=(date:Date|undefined) => {
  if(date){
    const options={
      weekday:'long',
      day:'numeric',
      year:'numeric',
      month:'long'
  } as Intl.DateTimeFormatOptions

return date.toLocaleDateString('en-US',options)
  }
  return 'unde'
    
}