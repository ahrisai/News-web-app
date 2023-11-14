

export const formatDate=(date:Date) => {

    const options={
        weekday:'long',
        day:'numeric',
        year:'numeric',
        month:'long'
    } as Intl.DateTimeFormatOptions

    console.log(date.toLocaleDateString('en-US',options))
  return date.toLocaleDateString('en-US',options)
}