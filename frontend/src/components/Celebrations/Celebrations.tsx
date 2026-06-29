import EventCard from "../EventCard/EventCard";

export default function Celebrations() {
    return (
        <section className="bg-stone-50 px-6 py-24">
            <div className="mx-auto max-w-5xl">

                <p className="mb-4 text-center text-xs uppercase tracking-[0.35em] text-stone-500">
                    Celebraciones
                </p>

                <h2 className="mb-16 text-center text-3xl font-light text-stone-900">
                    Acompáñame en estos días tan especiales
                </h2>

                <div className="space-y-8">
                    <EventCard
                        day="22"
                        month="AGO"
                        title="Ordenación Sacerdotal"
                        date="Sábado 22 de agosto de 2026"
                        time="11:00 hrs"
                        place="Santa Iglesia Catedral de Santiago"
                        city="Saltillo, Coahuila"
                        calendarUrl="#"
                    />

                    <EventCard
                        day="29"
                        month="AGO"
                        title="Cantamisa"
                        date="Sábado 29 de agosto de 2026"
                        time="12:00 hrs"
                        place="Parroquia Santa María Goretti"
                        city="Saltillo, Coahuila"
                        calendarUrl="#"
                    />

                    <EventCard
                        day="30"
                        month="AGO"
                        title="Misa en San Pablo Apóstol"
                        date="Domingo 30 de agosto de 2026"
                        time="12:30 hrs"
                        place="Parroquia San Pablo Apóstol"
                        city="Saltillo, Coahuila"
                        calendarUrl="#"
                    />
                </div>

            </div>
        </section>
    );
}