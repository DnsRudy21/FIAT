import Hero from "../components/Hero/Hero";
import Invitation from "../components/Invitation/Invitation";
import Celebrations from "../components/Celebrations/Celebrations";
import Intentions from "../components/Intentions/Intentions";
import Messages from "../components/Messages/Messages";
import Community from "../components/Community/Community";
import Farewell from "../components/Farewell/Farewell";


export default function HomePage() {
    return (
        <>
            <Hero />
            <Invitation />
            <Celebrations />
            <Intentions />
            <Messages />
            <Community />
            <Farewell />
        </>
    );
}