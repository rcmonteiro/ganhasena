'use client'

import { useEffect, useState } from "react";
import { drawNumbers,renderDrawn,renderSaved } from "./functions/logic"
import Toast from "./components/Toast";

export default function Main() {

  const [ drawn, setDrawn ] = useState<number[]>([])
  const [ saved, setSaved ] = useState<any[]>([])
  const [ showToast, toggleToast ] = useState<boolean>(false)

  useEffect(() => {
    const item = window.localStorage.getItem('ganhaSenaNumbers');
    setSaved(item ? JSON.parse(item) : []);
    setDrawn(drawNumbers([]));
  }, [])

  const saveNumber = () => {
    if (!saved.includes(drawn)) {
      window.localStorage.setItem('ganhaSenaNumbers', JSON.stringify(([...saved,drawn])))
      setSaved([...saved,drawn])
    } else
      toggleToast(true)
  }

  return (
    <main className="container flex flex-col justify-center mx-auto">
      <div className="flex flex-row mx-auto my-5">
        {renderDrawn(drawn)}
      </div>
      <div className="flex flex-row mx-auto my-5">
        <button onClick={() => setDrawn(drawNumbers([])) } className="mx-2 inline-flex items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Gerar número da sorte</button>
        <button onClick={() => saveNumber() } className="mx-2 inline-flex items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Salvar</button>
      </div>
      <div className="grid">
        {renderSaved(saved)}
      </div>
      <Toast message="Este número já foi adicionado!" show={showToast} toggleToast={toggleToast} />
    </main>
  );
}