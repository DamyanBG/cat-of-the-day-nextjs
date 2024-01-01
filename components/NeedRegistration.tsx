import Link from "next/link";

const NeedRegistration = () => {
    return (
        <main>
            <section className="need-registration">
                <h2>
                    You need a registration to access this page. Please,{" "}
                    <Link href="register">register</Link> or{" "}
                    <Link href="login">login</Link>!
                </h2>
            </section>
        </main>
    );
};

export default NeedRegistration;
