import Image from "next/image";
import NavLinks from "@/app/home/navbar";

export default function Skills() {
return (
    <>
        <NavLinks/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-5">
            <div className="col">
                <div className="border border-gray-300 h-96 p-8 rounded-lg shadow-md">
                    <Image src="/logo/laravel.png" width={150} height={150} alt="Laravel" className="mx-auto mt-3"/>
                    <div className="mt-4">
                        <h5 className="text-xl font-semibold uppercase text-gray-100">Laravel</h5>
                        <p className="text-start text-gray-300">Laravel est un framework de développement web complet et
                            facile à utiliser qui permet de créer rapidement des applications Web de qualité. C'est pour
                            ces raisons que ce framework est le meilleur que je puisse utiliser aujourd'hui.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="border border-gray-300 h-96 p-8 rounded-lg shadow-md">
                    <Image alt="Bootstrap" src="/logo/boostrap.png" width={150} height={150} className="card-img-top m-auto mt-3"/>
                    <div className="card-body">
                        <h5 className="card-title font-semibold uppercase text-gray-100">Bootstrap</h5>
                        <p className="card-text text-start text-gray-300">Bootstrap est un framework de développement Web qui permet
                            de créer des sites Web de manière rapide et facile. Il inclut un grand nombre de modèles de
                            base et de composants prédéfinis qui aide à créer une interface utilisateur attrayante et
                            cohérente sans avoir à partir de zéro.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="border border-gray-300 h-96 p-8 rounded-lg shadow-md">
                    <Image alt="Java" src="/logo/java.png" width={150} height={150} className="card-img-top m-auto mt-3"/>
                    <div className="card-body">
                        <h5 className="card-title font-semibold uppercase text-gray-100">Java</h5>
                        <p className="card-text text-start text-gray-300">Java est un langage de programmation populaire. Il est très
                            polyvalent, ce qui signifie qu'il peut être utilisé pour développer une grande variété
                            d'applications, que ce soit pour le web, les appareils mobiles ou les ordinateurs de
                            bureau.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="border border-gray-300 h-96 p-8 rounded-lg shadow-md">
                    <Image alt="Vue.js" src="/logo/vue.png" width={150} height={150} className="card-img-top m-auto mt-3"/>
                    <div className="card-body">
                        <h5 className="card-title font-semibold uppercase text-gray-100">Vue.js</h5>
                        <p className="card-text text-start text-gray-300">Vue.js est un framework JavaScript open-source pour la
                            création d'interfaces utilisateur dynamiques et réactives. Il a été conçu pour être facile à
                            apprendre et à utiliser, tout en étant performant et flexible. Vue.js est souvent comparé à
                            d'autres frameworks tels que React et Angular, mais il se distingue par sa simplicité et sa
                            légèreté.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="border border-gray-300 h-96 p-8 rounded-lg shadow-md">
                    <Image alt="Angular" src="/logo/angular.png" width={150} height={150} className="card-img-top m-auto mt-3"/>
                    <div className="card-body">
                        <h5 className="card-title font-semibold uppercase text-gray-100">Angular</h5>
                        <p className="card-text text-start text-gray-300">Angular est un framework JavaScript open-source développé
                            par Google pour la création d'applications web dynamiques et réactives.
                            Cependant, Angular est plus complexe que Vue.js en raison de son architecture plus
                            rigoureuse et de ses nombreux outils intégrés, tels que le système de routage et le système
                            de gestion des formulaires.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="border border-gray-300 h-96 p-8 rounded-lg shadow-md">
                    <Image alt="Node.js" src="/logo/node.png" width={150} height={150} className="card-img-top m-auto mt-3"/>
                    <div className="card-body">
                        <h5 className="card-title  font-semibold uppercase text-gray-100">Node.js</h5>
                        <p className="card-text text-start text-gray-300">Node.js est un environnement execution JavaScript
                            open-source qui permet d'exécuter du code JavaScript côté serveur. Node.js permet aux
                            développeurs de travailler avec JavaScript sur tous les niveaux de l'application, y compris
                            le côté client et serveur. Il est également compatible avec de nombreux frameworks
                            JavaScript.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}