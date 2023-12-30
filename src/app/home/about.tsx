import React from "react";
import Image from "next/image";


export default function About(){

    return(
        <>
            <div className="mt-30 mb-25">
                <div className="max-w-xl mx-auto">
                    <div className="p-8 rounded-lg shadow-md">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-1/3">
                                <Image src="/photo.jpg" width={500} height={500} alt="..." className="rounded img-fluid mx-auto"/>
                            </div>
                            <div className="w-2/3 pl-8">
                                <div className=" text-justify">
                                    <p className="text-lg">Bonjour, je m'appelle Grégoire Legrand et j'ai 20 ans.
                                        Je suis actuellement en troisième année de BUT informatique à l'IUT de Lens.</p>
                                    <p className="text-lg">Mon objectif est de devenir développeur web et j'ai
                                        hâte de me lancer dans cette carrière passionnante. J'aime apprendre de nouvelles
                                        technologies. Je suis capable de travailler efficacement en équipe.</p>
                                    <p className="text-lg">Je suis impatient de développer mes compétences en
                                        tant que développeur web et de créer des choses qui seront utilisées par des
                                        millions de personnes à travers le monde.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}