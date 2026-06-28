type EventCardProps = {
    day: string;
    month: string;
    title: string;
    date: string;
    time: string;
    place: string;
    city: string;
    calendarUrl: string;
};

export default function EventCard({
    day,
    month,
    title,
    date,
    time,
    place,
    city,
    calendarUrl,
}: EventCardProps) {
    return (
        <article className="flex rounded-3xl bg-white shadow-sm overflow-hidden border border-stone-200">

            <div className="bg-stone-900 text-white w-28 flex flex-col items-center justify-center">
                <span className="text-5xl font-light">{day}</span>
                <span className="tracking-[0.25em] text-xs mt-2">{month}</span>
            </div>

            <div className="flex-1 p-8">
                <h3 className="text-2xl font-light mb-3">{title}</h3>

                <p className="text-stone-600">{date}</p>

                <p className="mt-1 font-semibold">{time}</p>

                <p className="mt-6">{place}</p>

                <p className="text-stone-500">{city}</p>

                <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full border border-stone-300 px-5 py-3 text-sm hover:bg-stone-100 transition"
                >
                    Agregar a mi calendario
                </a>
            </div>

        </article>
    );
}