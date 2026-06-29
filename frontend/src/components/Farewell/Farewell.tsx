import farewellPhoto from "../../assets/farewell_photo.jpg";
import ordinationMoment from "../../assets/ordination_moment.jpg";
import vestingMoment from "../../assets/vesting_moment.jpg";

export default function Farewell() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-6xl">

                <p className="mb-5 text-center text-xs uppercase tracking-[0.35em] text-stone-500">
                    AGRADECIMIENTO
                </p>

                <h2 className="mb-16 text-center text-4xl font-light text-stone-900">
                    Gracias por acompañarme
                </h2>

                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <img
                        src={farewellPhoto}
                        alt="Diác. Maximiliano Constante Cedillo"
                        className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-lg"
                    />

                    <div className="space-y-8 text-lg leading-9 text-stone-700">
                        <p>
                            Mi corazón rebosa de alegría al contemplar la fidelidad de Dios.
                            Al recibir el don del sacerdocio ministerial, deseo que mi
                            participación en el sacerdocio de Cristo sea un regalo de amor
                            para la Santísima Virgen María, para que ella me conduzca
                            siempre a hacer la voluntad de su Hijo.
                        </p>

                        <p>
                            Gracias por acompañarme con tu cariño y tu oración.
                            Te espero con alegría en mi Ordenación Sacerdotal
                            y en mi Primera Santa Misa.
                        </p>

                        <p>
                            <strong>Con gratitud y afecto</strong>
                            <br />
                            Diác. Maximiliano Constante Cedillo
                        </p>
                    </div>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2">
                    <img
                        src={ordinationMoment}
                        alt="Imposición de manos durante la ordenación"
                        className="h-96 w-full rounded-3xl object-cover shadow-lg"
                    />

                    <img
                        src={vestingMoment}
                        alt="Revestimiento durante la celebración"
                        className="h-96 w-full rounded-3xl object-cover shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
}