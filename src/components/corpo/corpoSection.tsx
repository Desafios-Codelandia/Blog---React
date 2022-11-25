import React from "react";
import { Coracao } from "./coracao";


const Cards = ({ titulo, descricao }: any) => {
    return (
        <div className="container mx-auto">
            <div className="rounded-md bg-white p-6 items-center justify-center">
                <div className="flex justify-between pb-5">
                    <p>02 de jul, 2021</p>
                    <Coracao />
                </div>
                <div className="text-justify">
                    <h1 className="font-bold pb-2">{titulo}</h1>
                    <p>{descricao}</p>
                </div>
            </div>
        </div>
    )
}

export const Corpo = () => {
    return (
        <div className="bg-[#F3F5F7]  h-auto container mx-auto max-w-lg md:max-w-7xl px-5 space-y-20">
            <Cards
                titulo="Agora é oficial: o Windows 11 está vindo"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
            />

            <Cards
                titulo="Tim Berners-Lee vai leiloar código-fonte da web"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero."
            />

            <Cards
                titulo="Tem Firefox novo no pedaço e você vai
                quer migrar"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
            />

            <Cards
                titulo="John MCAfee, criador do antivírus McAfee, morre"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero."
            />
        </div>
    )
}