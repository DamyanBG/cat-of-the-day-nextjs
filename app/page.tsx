
import CatOfTheDayComponent from "@/components/CatOfTheDayComponent";

export default function Home() {
    return (
        <main>
            <section className="top-section">
                <article className="home-image">
                
                    <CatOfTheDayComponent />
                </article>
                <article className="home-text">
                    <h1>Welcome to Cat of the day!</h1>
                    <br />
                    <p>A platform for real cat lovers!</p>
                </article>
            </section>
        </main>
    );
}
