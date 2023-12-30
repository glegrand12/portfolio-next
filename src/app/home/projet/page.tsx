import NavLinks from "@/app/home/navbar";

export default function Projet() {
    return (
        <>
            <NavLinks/>
            <h1 className="text-3xl font-bold text-center text-white mb-8">MES PROJETS</h1>

            <div className="row mx-auto">
                {/* Projets réalisés pour les études */}
                <h3 className="mt-5 mb-5 pt-4 text-center uppercase font-bold  text-2xl text-white">Projets réalisés pour les études</h3>
                <div className="mb-8 flex justify-center">
                    <div className="card w-96 p-4  border border-gray-300 rounded-md mx-2">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Projet Fractales
                            <span className="badge bg-danger ms-2">JAVA</span>
                        </h2>
                        <p className="text-start text-white">
                            Pour ce projet de groupe, le but est de réaliser des images complexes à l'aide d'un algorithme créant une image infinie.
                        </p>
                    </div>

                    <div className="card w-96 p-4  border border-gray-300 rounded-md mx-2">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Projet Space Invader
                            <span className="badge bg-danger ms-2">JAVA</span>
                        </h2>
                        <p className="text-start text-white">
                            Dans ce projet effectué en groupe, nous avons recréé le jeu du space invader.
                        </p>
                    </div>

                    <div className="card w-96 p-4  border border-gray-300 rounded-md mx-2">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Projet Pokémon
                            <span className="badge bg-primary ms-2">LARAVEL</span>
                        </h2>
                        <p className="text-start text-white">
                            Ce projet a été fait afin de voir et comprendre les bases du framework Laravel.
                        </p>
                    </div>

                    <div className="card w-96 p-4  border border-gray-300 rounded-md mx-2">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Projet Ludo-tech
                            <span className="badge bg-primary ms-2">LARAVEL</span>
                            <span className="badge bg-warning ms-2">ANGULAR</span>
                            <span className="badge bg-primary ms-2">KOTLIN</span>
                        </h2>
                        <p className="text-start text-white">
                            Ce projet a été réalisé dans le but de pouvoir afficher et présenter aux utilisateurs une liste de jeux avec beaucoup de fonctionnalités.
                        </p>
                    </div>
                </div>

                {/* Projets personnels */}
                <h3 className="mt-5 mb-5 pt-4 text-center uppercase font-bold  text-2xl text-white">Projets personnels</h3>
                <div className="flex justify-center">
                    <div className="card w-96 p-4  border border-gray-300 rounded-md mx-2">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Projet Angular
                            <span className="badge bg-warning ms-2">ANGULAR</span>
                        </h2>
                        <p className="text-start text-white">
                            Ce projet fait avec la documentation Angular a pour but d'apprendre les bases du framework.
                        </p>
                    </div>

                    <div className="card w-96 p-4  border border-gray-300 rounded-md mx-2">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Projet site de gâteaux
                            <span className="badge bg-primary ms-2">LARAVEL</span>
                        </h2>
                        <p className="text-start text-white">
                            Ce projet est la création d'un site de gâteaux où toutes les recettes pâtissières connues y seront notées. (Ce projet est toujours en cours.)
                        </p>
                    </div>

                    <div className="card w-96 p-4  border border-gray-300 rounded-md mx-2">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Projet Gelkrem
                            <span className="badge bg-primary ms-2">LARAVEL</span>
                        </h2>
                        <p className="text-start text-white">
                            Le but de ce projet est de proposer une refonte du site Gelkrem avec plusieurs fonctionnalités en plus. (Ce projet est encore en cours.)
                        </p>
                    </div>

                    <div className="card w-96 p-4  border border-gray-300 rounded-md mx-2">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            TODO liste
                            <span className="badge bg-success ms-2">Vue</span>
                        </h2>
                        <p className="text-start text-white">
                            Le projet présente une simple liste de tâches où il est possible de créer, supprimer, modifier une tâche.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
