import React from "react";
import { Lupa } from "./lupa";

export const NavBar = () => {
    return (
        <div className="justify-center items-center h-52 bg-[#3EA1DB] text-white mb-24">
            <nav className="container mx-auto max-w-lg md:max-w-7xl pt-12 px-5 items-center">
                <div className="flex justify-between pb-10 font-bold">
                    <h1>Codelandia</h1>
                    <h1>Blog</h1>
                </div>
                <div className=" flex flex-row bg-blue-500 items-center gap-2 max-w-full p-3">
                   <Lupa/>
                   <input className="w-full bg-transparent outline-none" type="text" placeholder="Pesquisar no Blog"/>
                </div>
            </nav>
        </div>
    )
}