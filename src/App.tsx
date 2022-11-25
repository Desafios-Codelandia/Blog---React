import React from "react"
import { NavBar } from "./components/navBar/NavBar"
import { Corpo } from "./components/corpo/corpoSection"


export default function App() {

  return (
    <div className="App bg-[#F3F5F7]">
        <NavBar/>
        <Corpo/>
    </div>
  )
}