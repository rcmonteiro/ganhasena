import Number from "./Number"
import { TrashIcon } from '@heroicons/react/24/outline';

const Saved = (props: any) => {
  const items = props.saved
  
  return (
    items.map((drawn: number[],n1: any) => (
      <div key={n1} className="flex flex-row mx-auto my-1">  
        {drawn.map((number: number,n2: any) => (
          <Number key={n2} value={number}/>
        ))}
        <button onClick={() => props.update(n1)} className="bg-blue-500 hover:bg-blue-400 text-white size-6 text-base mx-1 text-center align-middle justify-center rounded-full"><TrashIcon className="w-4 mx-auto" /></button>
      </div>
    ))
  )
}

export default Saved