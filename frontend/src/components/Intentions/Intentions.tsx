import prayerIntentions from "../../assets/prayer_intentions.jpg";

export default function Intentions() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

                <img
                    src={prayerIntentions}
                    alt="Momento de oración durante la ordenación"
                    className="w-full rounded-3xl object-cover shadow-lg"
                />

                <div>
                    <p className="mb-8 text-xs uppercase tracking-[0.35em] text-stone-500">
                        Intenciones de oración
                    </p>

                    <div className="mb-10 space-y-6 text-lg leading-9 text-stone-700">
                        <p>
                            En mi Primera Santa Misa deseo presentar al Señor las alegrías,
                            esperanzas, sufrimientos y necesidades de su pueblo.
                        </p>

                        <p>
                            Si lo deseas, confíame una intención de oración. La ofreceré
                            al Padre en el Santo Sacrificio de la Eucaristía, unida a la
                            ofrenda perfecta de Cristo, para gloria de Dios y bien de las almas.
                        </p>
                    </div>

                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Tu nombre (opcional)"
                            className="w-full rounded-2xl border border-stone-300 px-5 py-4 outline-none transition focus:border-stone-700"
                        />

                        <textarea
                            placeholder="Escribe aquí tu intención..."
                            rows={6}
                            className="w-full resize-none rounded-2xl border border-stone-300 px-5 py-4 outline-none transition focus:border-stone-700"
                        />

                        <button
                            type="button"
                            className="w-full rounded-full bg-stone-900 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-stone-700"
                        >
                            Confiar esta intención al Señor
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}