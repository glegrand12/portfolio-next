import NavLinks from "@/app/home/navbar";

export default function Memory(){
    return(
        <>
            <NavLinks/>
            <div className="flex items-center justify-center h-screen">
                <div className="card w-full md:w-1/2 p-8 border border-gray-300">
                    <h1 className="mb-5 mt-5 text-center uppercase font-bold text-3xl">mémoire</h1>
                        <h3 className="mb-5 mt-5 ms-10 text-left font-bold text-2xl">Utilisation de NEXTJS</h3>
                        <div className="card-body text-justify">
                            <h4 className="font-semibold mb-5 mt-5 text-center ">En quoi NextJS permet t'il de faire des sites éco conçu ?</h4>
                            <ul className="font-semibold mb-5">
                                <li>Préchargement des Pages :
                                    <p className="mt-5 font-normal  text-justify">Next.js offre des fonctionnalités de
                                        préchargement des pages, ce qui signifie que les utilisateurs n'ont besoin de
                                        charger que le contenu essentiel. Cela évite le téléchargement inutile de
                                        ressources, optimisant ainsi la performance et réduisant la consommation
                                        d'énergie.</p>
                                </li>

                                <li className="mt-5">Optimisation des Images :
                                    <p className="mt-5 font-normal text-justify">La gestion native des images dans
                                        Next.js facilite l'optimisation automatique de celles-ci. Les images sont
                                        compressées et adaptées aux différents dispositifs, minimisant ainsi la taille
                                        des fichiers à télécharger et réduisant la bande passante nécessaire.</p>
                                </li>
                                <li className="mt-5">SEO Performant :
                                    <p className="mt-5 font-normal text-justify">Le rendu côté serveur de Next.js
                                        améliore l'indexation par les moteurs de recherche, ce qui a un impact positif
                                        sur le référencement. Une visibilité accrue peut contribuer à attirer davantage
                                        de trafic organique, optimisant ainsi l'utilisation des ressources pour le rendu
                                        des pages.</p>
                                </li>
                                <li className="mt-5">Déploiement Facile sur Vercel :
                                    <p className="mt-5 font-normal text-justify">Vercel, la plateforme de déploiement
                                        recommandée pour les applications Next.js, offre une gestion optimisée des
                                        ressources, une mise à l'échelle automatique et des performances élevées. Cela
                                        garantit un hébergement efficace et économe en énergie.</p>
                                </li>
                                <li className="mt-5">Déploiement Facile sur Vercel :
                                    <p className="mt-5 font-normal text-justify">Vercel, la plateforme de déploiement
                                        recommandée pour les applications Next.js, offre une gestion optimisée des
                                        ressources, une mise à l'échelle automatique et des performances élevées. Cela
                                        garantit un hébergement efficace et économe en énergie.</p>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    )
}