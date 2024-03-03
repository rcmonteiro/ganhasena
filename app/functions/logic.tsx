import Number from "../_components/Number"

const drawNumbers = (numbers: any[]): number[] => {
  
  const drawn = randomNumber()

  if (numbers.length===6) return numbers.sort((n1,n2) => n1 - n2)
  if (!numbers.includes(drawn)) {
    return drawNumbers([...numbers, drawn])
  } else {
    return drawNumbers([...numbers])
  }

}

const renderDrawn = (nums: number[]) => {
  return nums.map((n,i)=><Number big key={i} value={n}/>)
}

const renderSaved = (items: any[]) => {
  return (
    items.map((drawn: number[],n1) => (
      <div key={n1} className="flex flex-row mx-auto my-1">  
        {drawn.map((number: number,n2) => (
          <Number key={n2} value={number}/>
        ))}
        <button className="bg-blue-500 hover:bg-blue-400 text-white size-6 leading-6 text-base mx-1 text-center align-middle rounded-full">x</button>
      </div>
    ))
  )
}

const randomNumber = () => {
  return Math.round(Math.random() * 60 +1)
}

export {
  drawNumbers,
  renderDrawn,
  renderSaved
}