const Number = (props: any) => {
  return (
    <div 
      className={`
        ${props.big ? 'size-10 leading-10 text-2xl bg-pink-500' : 'size-6 leading-6 text-base bg-gray-700' }
         text-white mx-1 text-center align-middle rounded-full
      `}>{props.value}</div>
  )
}

export default Number