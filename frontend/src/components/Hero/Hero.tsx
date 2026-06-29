import heroPhoto from "../../assets/hero_photo.jpg";

export default function Hero() {
    return (
        <section className="bg-white px-6 py-20">
            <div className="mx-auto max-w-4xl text-center">

                {/* Fotografía */}
                <img
                    src={heroPhoto}
                    alt="Diác. Maximiliano Constante Cedillo"
                    className="mx-auto mb-10 w-full max-w-sm rounded-3xl object-cover shadow-lg"
                />

                {/* Título de la sección */}
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-500">
                    Invitación
                </p>

                {/* Invitación */}
                <div className="space-y-8 text-lg leading-9 text-stone-700">

                    <p>
                        La Diócesis de Saltillo, el Seminario del Sagrado Corazón y la
                        familia Constante Cedillo tienen el honor de invitarle a la{" "}
                        <strong>Santa Misa de Ordenación Sacerdotal</strong> del diácono{" "}
                        <strong>Maximiliano Constante Cedillo</strong>.
                    </p>

                    <p>
                        Quien, por la imposición de manos y la oración consecratoria de{" "}
                        <strong>Mons. Hilario González García</strong>, Obispo de Saltillo,
                        será ordenado presbítero para gloria de Dios y servicio de su
                        Pueblo Santo.
                    </p>

                </div>

            </div>
        </section>
    );
}