import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <section>
                <article>
                    <h4>About us</h4>
                    <p>
                        We are a group of developers passionate about creating
                        great software.
                    </p>
                </article>
                <article>
                    <h4>Contact Us</h4>
                    <p>Email: inspirationalcode@gmail.com</p>
                    <p>Phone: 123-456-7890</p>
                </article>
                <article>
                    <h4>Follow Us</h4>
                    <p>Twitter</p>
                    <p>
                        <Link href="https://www.facebook.com/people/Cat-of-the-week/61555200061361/">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </Link>
                    </p>
                    <p>Instagram: @example</p>
                </article>
            </section>
            <hr />
            <p className="footer-text">&copy; 2024 Cat of the week app</p>
        </footer>
    );
};

export default Footer;
