import heroPhoto from "../../assets/hero_photo.jpg";

export default function Hero() {
    return (
        <section className="min-h-screen bg-stone-50 flex items-center justify-center px-6 py-16">
            <div className="max-w-4xl text-center">
                <img
                    src={heroPhoto}
                    alt="Diác. Maximiliano Constante Cedillo"
                    className="w-52 h-52 md:w-64 md:h-64 mx-auto rounded-3xl object-cover shadow-2xl mb-10"
                />

                <p className="uppercase tracking-[0.35em] text-stone-500 text-xs md:text-sm mb-4">
                    Ordenación Sacerdotal
                </p>

                <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight mb-3">
                    Diác. Maximiliano
                    <br />
                    Constante Cedillo
                </h1>

                <p className="text-lg md:text-xl leading-8 text-stone-600 max-w-2xl mx-auto mb-10">
                    Con inmensa alegría te invito a acompañarme en uno de los días
                    más importantes de mi vida.
                </p>
            </div>
        </section>
    );
}