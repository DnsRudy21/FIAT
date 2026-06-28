import EventCard from "../EventCard/EventCard";

export default function Celebrations() {
    return (
        <section className="bg-stone-50 py-24 px-6">

            <div className="max-w-5xl mx-auto">

                <p className="uppercase tracking-[0.35em] text-xs text-stone-500 text-center mb-4">
                    Celebraciones
                </p>

                <h2 className="text-4xl font-light text-center mb-16">
                    Acompáñame en estos días tan especiales
                </h2>

                <div className="space-y-8">

                    <EventCard
                        day="22"
                        month="AGO"
                        title="Ordenación Sacerdotal"
                        date="22 de agosto de 2026"
                        time="11:00 hrs"
                        place="Santa Iglesia Catedral de Santiago"
                        city="Saltillo, Coahuila"
                        calendarUrl="#"
                    />

                    <EventCard
                        day="29"
                        month="AGO"
                        title="Cantamisa"
                        date="29 de agosto de 2026"
                        time="12:00 hrs"
                        place="Parroquia Santa María Goretti"
                        city="Saltillo, Coahuila"
                        calendarUrl="#"
                    />

                    <EventCard
                        day="30"
                        month="AGO"
                        title="Misa en San Pablo Apóstol"
                        date="30 de agosto de 2026"
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