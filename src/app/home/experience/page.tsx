import NavLinks from "@/app/home/navbar";

export default function Experience() {
    return (
        <>
            <NavLinks />
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold uppercase text-center mb-8">Expérience</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Experience */}
                    <div className="card mb-8 border border-gray-300 gap-8">
                        <div className="card-body text-justify">
                            <h4 className="text-xl font-semibold mb-2 text-center mt-7">Stage de deuxième année</h4>
                            <p className="mb-2 text-center mt-4">Waigéo, Bruay-la-buissière, France</p>
                            <p className="mb-4 mt-7">
                                Ce stage intervient pour ma deuxième année de BUT informatique.
                                Durant cette période de 2 mois, j'ai mis en place diverse
                                fonctionnalités aussi bien du côté serveur que côté client sur
                                une application interne à l'entreprise.
                            </p>

                            <h2 className="text-center text-xl">Langages</h2>
                            <div className="mb-4  mt-7">
                                <p>
                                    Les langages utilisés étaient principalement VueJS pour le
                                    côté client et NodeJS pour le côté serveur.
                                </p>
                                <p>
                                    J'ai aussi eu l'occasion de travailler sur un projet JavaScript
                                    avec notamment des requêtes jQuery.
                                </p>
                            </div>

                            <h2 className="text-center text-xl  mt-7">Bénéfices</h2>
                            <div  className="mt-7">
                                <p>
                                    Grâce à ce stage, j'ai eu l'occasion d'apprendre les langages
                                    VueJS et NodeJS en plus de développer mes compétences dans ces
                                    mêmes langages.
                                </p>
                                <p>
                                    J'ai également développé des compétences humaines en apprenant
                                    la vie en entreprise dans le monde de la tech.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Experience */}
                    <div className="card mb-8 border border-gray-300">
                        <div className="card-body text-left">
                            <h4 className="text-xl font-semibold mb-2 text-center mt-7">Manutentionnaire</h4>
                            <p className="mb-2 text-center mt-7">Gelkrem, Loison-sous-Lens, France</p>
                            <p className="mb-4 mt-7">
                                Le travail à la chaîne de glace consiste à travailler sur une
                                chaîne de production de glace.
                            </p>
                            <p>
                                Vous pouvez être chargé de surveiller et de contrôler le
                                fonctionnement de la machine, de vérifier la qualité de la glace
                                produite, de charger et de décharger les matières premières, de
                                nettoyer et d'entretenir la machine, et de respecter les règles de
                                sécurité alimentaire.
                            </p>
                            <h2 className="text-xl text-center mt-7">Conditions</h2>
                            <div className="mb-4 mt-7">
                                <p>
                                    Le travail à la chaîne de glace peut être physique et exiger de
                                    rester debout pendant de longues périodes. Il peut également
                                    être nécessaire de travailler en horaires décalés et les
                                    week-ends, en fonction de l'entreprise pour laquelle vous
                                    travaillez.
                                </p>
                                <p>
                                    La capacité à travailler en équipe et à respecter les consignes
                                    de sécurité est également importante.
                                </p>
                            </div>

                            <h2 className="text-xl text-center mt-7">Bénéfices</h2>
                            <div className="mb-4 mt-7">
                                <p>
                                    J'ai appris à être rigoureux et à dépasser mes limites grâce
                                    aux conditions de travail exigeantes de ce métier.
                                </p>
                                <p>
                                    J'ai également développé des compétences en matière de
                                    concentration et de travail sous pression, ce qui m'a été utile
                                    dans d'autres aspects de ma vie.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
