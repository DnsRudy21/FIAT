import { useState } from "react";

export default function Invitation() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="bg-white py-20 px-6">

            <div className="max-w-2xl mx-auto">

                <p className="uppercase tracking-[0.35em] text-stone-500 text-xs mb-4 text-center">
                    Un mensaje para ustedes
                </p>

                <h2 className="text-4xl text-center font-light text-stone-900 mb-12">
                    Quiero abrirles mi corazón
                </h2>

                <div className="space-y-6 text-lg leading-9 text-stone-700">

                    <p>
                        Dentro de muy poco, Dios me concederá la inmensa gracia de
                        recibir la ordenación sacerdotal.
                    </p>

                </div>

                <div className="text-center mt-10">

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-stone-500 hover:text-stone-900 transition"
                    >
                        {expanded ? "Mostrar menos ↑" : "Continuar leyendo ↓"}
                    </button>

                </div>

                {expanded && (

                    <div className="mt-10 space-y-6 text-lg leading-9 text-stone-700">
                        <p>
                            Al acercarse ese día, hay dos deseos muy 
                            profundos que habitan en mi corazón.
                        </p>

                        <p>
                            El primero es ofrecer mi sacerdocio como un regalo de amor
                            a la Santísima Virgen María, para que sea ella quien
                            disponga de él según la voluntad de Dios.
                        </p>

                        <p>
                            El segundo es que mi ministerio tenga siempre una opción
                            preferencial por los adolescentes y los jóvenes. Ustedes
                            han sido una parte muy importante de este camino vocacional
                            y sacerdotal. Han sido mi primera comunidad, mi primera
                            familia en el ministerio, y por eso ocupan un lugar muy
                            especial en mi corazón.
                        </p>

                        <p>
                            Les comparto desde ahora esta invitación para que puedan
                            apartar la fecha y, si Dios lo permite, vivir juntos este
                            momento tan importante en mi vida.
                        </p>

                        <p>
                            Gracias por cada oración, por cada encuentro, por su
                            amistad y por permitirme caminar con ustedes. Siempre
                            llevaré esta comunidad en mi corazón y pediré a Dios que
                            siga haciendo grandes cosas en la vida de cada uno.
                        </p>

                        <div className="pt-6">

                            <p>Con mucho cariño y gratitud,</p>

                            <p className="mt-4 font-semibold text-stone-900">
                                Diác. Maximiliano Constante Cedillo
                            </p>

                        </div>

                    </div>

                )}

            </div>

        </section>
    );
}