"use client";

import { Screen } from "@/Screen";
import { useEffect, useState } from "react";

export default function Home() {
  const [tela,setTela] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setTela(window.innerWidth)
    },500)
  },[tela])

  return <>{tela > 550 ? <Screen.Desktop /> : <Screen.Mobile />}</>;
}
