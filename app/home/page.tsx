import Header from "./components/header";
import ShowCase from "./components/showcase";
import Target from "./components/target";
import ContactUs from "./components/contact";

export default function Home() {
    return(
        <>
            <main>
                <Header></Header>
                <ShowCase></ShowCase>
                <Target></Target>
                <ContactUs></ContactUs>
            </main>
        </>
    )
}