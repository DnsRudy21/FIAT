import blessingsImage from "../../assets/blessings.jpg";

export default function Messages() {
    return (
        <section className="bg-stone-50 px-6 py-24">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

                <div>
                    <p className="mb-8 text-xs uppercase tracking-[0.35em] text-stone-500">
                        Libro de bendiciones
                    </p>

                    <h2 className="mb-8 text-4xl font-light text-stone-900">
                        Un pedacito de tu corazón
                    </h2>

                    <div className="mb-10 space-y-6 text-lg leading-9 text-stone-700">
                        <p>
                            En las Bodas de Caná, María estuvo presente en el comienzo
                            de una nueva historia. Hoy, al iniciar mi ministerio sacerdotal,
                            te invito a dejar unas palabras de felicitación, una bendición
                            o una oración.
                        </p>

                        <p>
                            Las conservaré con gratitud como un recuerdo de este día y
                            de todos aquellos que, junto con la Santísima Virgen María,
                            me acompañan en el camino del sacerdocio.
                        </p>
                    </div>

                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Tu nombre (opcional)"
                            className="w-full rounded-2xl border border-stone-300 bg-white px-5 py-4 outline-none transition focus:border-stone-700"
                        />

                        <textarea
                            placeholder="Escribe aquí tu mensaje..."
                            rows={6}
                            className="w-full resize-none rounded-2xl border border-stone-300 bg-white px-5 py-4 outline-none transition focus:border-stone-700"
                        />

                        <button
                            type="button"
                            className="w-full rounded-full bg-stone-900 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-stone-700"
                        >
                            Dejar mi bendición
                        </button>
                    </form>
                </div>

                <img
                    src={blessingsImage}
                    alt="Bendición durante la ordenación"
                    className="w-full rounded-3xl object-cover shadow-lg"
                />

            </div>
        </section>
    );
}