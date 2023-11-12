

export const formatDate=(date:Date) => {

    const options={
        weekday:'long',
        year:'numeric',
        month:'long'
    } as Intl.DateTimeFormatOptions 
  return date.toLocaleDateString('en-US',options)
}