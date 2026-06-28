export default function Messages() {
    return (
        <section className="bg-stone-50 px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-500">
                    Libro de Bendiciones
                </p>

                <h2 className="mb-8 text-4xl font-light text-stone-900">
                    Un pedacito de tu corazón
                </h2>

                <p className="mx-auto mb-12 max-w-xl text-lg leading-8 text-stone-600">
                    Hay personas que Dios pone en nuestro camino para acompañarnos, enseñarnos y acercarnos un poco más a Él.
                    Si lo deseas, puedes dejar unas palabras que el Padre Max conservará como recuerdo de este día tan especial.
                </p>

                <form className="space-y-5 text-left">
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
                        Compartir mi mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}