'use client'

import { useEffect, useState } from "react";
import { drawNumbers,renderDrawn,renderSaved } from "./functions/logic"
import { ArrowPathIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Toast from "./components/Toast";
import Saved from "./components/Saved";

export default function Main() {

  const [ drawn, setDrawn ] = useState<number[]>([])
  const [ saved, setSaved ] = useState<any[]>([])
  const [ showToast, toggleToast ] = useState<boolean>(false)

  useEffect(() => {
    const item = window.localStorage.getItem('ganhaSenaNumbers');
    setSaved(item ? JSON.parse(item) : []);
    setDrawn(drawNumbers([]));
  }, [])

  const saveNumber = ():void => {
    if (!saved.includes(drawn)) {
      window.localStorage.setItem('ganhaSenaNumbers', JSON.stringify(([...saved,drawn])))
      setSaved([...saved,drawn])
    } else
      toggleToast(true)
  }

  const removeNumber = (item: number):void => {
    saved.splice(item,1)
    window.localStorage.setItem('ganhaSenaNumbers', JSON.stringify(saved))
    setSaved([...saved])
  }

  return (
    <main className="container flex flex-col justify-center mx-auto">
      <div className="flex flex-row mx-auto my-5">
        {renderDrawn(drawn)}
      </div>
      <div className="flex flex-row mx-auto my-5">
        <button onClick={() => setDrawn(drawNumbers([])) } className="mx-2 inline-flex items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Novo número <ArrowPathIcon className="w-4 ml-2"/></button>
        <button onClick={() => saveNumber() } className="mx-2 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-blue-500 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Salvar <ArrowDownTrayIcon className="w-4 ml-2" /></button>
      </div>
      <div className="grid">
        <Saved saved={saved} update={removeNumber}/>
      </div>
      <Toast message="Este número já foi adicionado!" show={showToast} toggleToast={toggleToast} />
    </main>
  );
}