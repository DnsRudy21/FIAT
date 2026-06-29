import Hero from "../components/Hero/Hero";
import Scripture from "../components/Scripture/Scripture";
import Celebrations from "../components/Celebrations/Celebrations";
import Intentions from "../components/Intentions/Intentions";
import Messages from "../components/Messages/Messages";
import Farewell from "../components/Farewell/Farewell";


export default function HomePage() {
    return (
        <>
            <Hero />
            <Scripture />
            <Celebrations />
            <Intentions />
            <Messages />
            <Farewell />
        </>
    );
}