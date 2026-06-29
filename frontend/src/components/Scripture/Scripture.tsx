import goodShepherd from "../../assets/good_shepherd.jpeg";

export default function Scripture() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">

                {/* Título */}
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-stone-500">
                    La Palabra de Dios
                </p>

                {/* Imagen */}
                <img
                    src={goodShepherd}
                    alt="Jesús, el Buen Pastor"
                    className="mx-auto mb-10 w-full max-w-xs"
                />

                {/* Cita */}
                <blockquote className="text-3xl italic font-light text-stone-700 leading-relaxed">
                    «Tu Dios te ha ungido
                    <br />
                    con óleo de alegría.»
                </blockquote>

                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-stone-500">
                    Salmo 45, 7
                </p>

            </div>
        </section>
    );
}