import farewellPhoto from "../../assets/farewell_photo.jpg";

export default function Farewell() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
                <img
                    src={farewellPhoto}
                    alt="Diác. Maximiliano Constante Cedillo"
                    className="mx-auto mb-12 h-44 w-44 rounded-3xl object-cover shadow-xl"
                />

                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-500">
                    Gracias
                </p>

                <h2 className="mb-8 text-4xl font-light text-stone-900">
                    Gracias por acompañarme
                </h2>

                <div className="mx-auto max-w-2xl space-y-6 text-lg leading-8 text-stone-600">
                    <p>
                        Gracias por dedicar unos minutos a leer esta carta y
                        acompañarme en este momento tan importante de mi vida.
                    </p>

                    <p>
                        Más allá de una invitación, deseo compartir con ustedes
                        la alegría que Dios ha puesto en mi corazón.
                    </p>

                    <p>
                        Espero contar con sus oraciones para que mi ministerio
                        sea siempre fiel a Cristo y al servicio de su Iglesia.
                    </p>
                </div>

                <div className="mt-12 text-stone-700">
                    <p>Con cariño y gratitud,</p>
                    <p className="mt-3 font-semibold text-stone-900">
                        Diác. Maximiliano Constante Cedillo
                    </p>
                </div>

                <div className="mt-16 border-t border-stone-200 pt-10">
                    <p className="text-2xl font-light tracking-[0.25em] text-stone-900">
                        FIAT
                    </p>
                    <p className="mt-3 text-sm text-stone-500">
                        “Hágase en mí según tu palabra.” — Lucas 1,38
                    </p>
                </div>
            </div>
        </section>
    );
}