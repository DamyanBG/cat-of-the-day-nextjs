
import CatOfTheWeekComponent from "@/components/CatOfTheDayComponent";

export default function Home() {
    return (
        <main>
            <section className="top-section">
                <article className="home-text">
                    <h1>Welcome to Cat of the week!</h1>
                    <br />
                    <p>A platform for real cat lovers!</p>
                </article>
                <article className="home-image">
                    <CatOfTheWeekComponent />
                </article>
            </section>
        </main>
    );
}
