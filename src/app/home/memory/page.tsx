import NavLinks from "@/app/home/navbar";

export default function Memory(){
    return(
        <>
            <NavLinks/>
            <div className="flex items-center justify-center mt-9">
                <div className="card w-full md:w-1/2 p-8 border border-gray-300">
                    <h1 className="mb-5 mt-5 text-center uppercase font-bold text-3xl">mémoire</h1>
                        <h3 className="mb-5 mt-5 ms-10 text-left font-bold text-2xl">Utilisation de NEXTJS</h3>
                    <div className="card-body text-justify">
                        <h4 className="font-semibold mb-5 mt-5 text-center ">En quoi NextJS permet t'il de faire des
                            sites éco conçu ?</h4>
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

                        <h4 className="font-bold uppercase mb-5 mt-5 text-center ">conclusion</h4>
                        <p className="text-justify mb-5 mt-5">En combinant ces avantages, Next.js se positionne comme un
                            choix optimal pour le développement écoconçu de sites Internet, offrant une expérience
                            utilisateur rapide et efficace tout en minimisant l'empreinte environnementale.</p>


                        <h4 className="font-semibold mb-5 mt-5 text-center ">Quelle sont mes choix dans la réalisation
                            de
                            mon portfolio ?</h4>
                        <ul className="font-semibold mb-5">
                            <li className="mt-5">Routage Dynamique :
                                <p className="mt-5 font-normal text-justify">Next.js offre un système de routage
                                    dynamique qui a été un élément clé dans l'optimisation de la structure de mon site.
                                    Grâce à ce système, les pages sont générées de manière dynamique en fonction des
                                    besoins, permettant une gestion efficace du contenu. Cela a un impact positif sur
                                    les performances, car seules les pages nécessaires sont chargées, contribuant ainsi
                                    à une expérience utilisateur plus rapide et écoénergétique.
                                </p>
                            </li>
                            <li className="mt-5">Hébergement sur Vercel :
                                <p className="mt-5 font-normal text-justify">Le choix d'héberger mon portfolio sur
                                    Vercel s'inscrit dans une démarche écoconçue. Vercel offre une gestion optimisée des
                                    ressources et une facilité de mise à l'échelle, garantissant ainsi une consommation
                                    énergétique efficace. De plus, la plateforme Vercel est spécialement adaptée à
                                    l'écosystème Next.js, assurant une synergie parfaite entre le framework et le
                                    service d'hébergement.
                                </p>
                            </li>
                            <li className="mt-5">Images Optimisées :
                                <p className="mt-5 font-normal text-justify">La gestion native des images dans Next.js a
                                    été exploitée pour optimiser leur rendu. Les images sont automatiquement compressées
                                    et adaptées aux différents dispositifs, réduisant ainsi la taille des fichiers à
                                    télécharger. Cette optimisation contribue à minimiser la charge réseau, offrant une
                                    navigation plus fluide et économe en énergie.
                                </p>
                            </li>
                        </ul>

                        <h4 className="font-semibold uppercase mb-5 mt-5 text-center ">En conclusion</h4>
                        <p className="text-justify mt-5 "> En conclusion, l'utilisation de Next.js pour le développement
                            de mon portfolio s'aligne parfaitement avec les principes de l'écoconception. Les choix de
                            mise en œuvre, tels que le routage dynamique, l'utilisation de composants réutilisables,
                            l'hébergement sur Vercel, et l'optimisation des images, convergent vers une expérience
                            utilisateur efficiente, tout en minimisant l'impact environnemental associé au développement
                            web.</p>
                    </div>
                </div>
            </div>
        </>
    )
}