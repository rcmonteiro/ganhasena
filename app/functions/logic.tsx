import Number from "../components/Number"

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