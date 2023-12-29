
import CatOfTheDayComponent from "@/components/CatOfTheDayComponent";

export default function Home() {
    return (
        <main>
            <section className="home-section">
                <h1>Welcome to Cat of the day!</h1>
                <p>A platform for real cat lovers!</p>
                
                <CatOfTheDayComponent />
            </section>
        </main>
    );
}
