import community1 from "../../assets/community/community_01.jpg";
import community2 from "../../assets/community/community_02.jpg";
import community3 from "../../assets/community/community_03.jpg";
import community4 from "../../assets/community/community_04.jpg";
import community5 from "../../assets/community/community_05.jpg";
import community6 from "../../assets/community/community_06.jpg";

const images = [
    community1,
    community2,
    community3,
    community4,
    community5,
    community6,
];

export default function Community() {
    return (
        <section className="bg-stone-50 py-24 px-6">

            <div className="mx-auto max-w-6xl">

                <p className="mb-4 text-center text-xs uppercase tracking-[0.35em] text-stone-500">
                    Mi comunidad
                </p>

                <h2 className="mb-6 text-center text-4xl font-light">
                    San Pablo Apóstol
                </h2>

                <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-8 text-stone-600">
                    San Pablo Apóstol ha sido mi hogar durante estos años. Aquí encontré amigos, hermanos de fe y personas que me ayudaron a responder con un "sí" al llamado de Dios. Estas imágenes son solo un pequeño reflejo de todo lo que hemos vivido juntos.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {images.map((image, index) => (

                        <img
                            key={index}
                            src={image}
                            alt={`Comunidad ${index + 1}`}
                            className="aspect-square w-full rounded-3xl object-cover shadow-lg transition duration-300 hover:scale-[1.02]"
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}