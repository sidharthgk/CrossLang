import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="hero">
                <h1>Learn New Programming Languages Seamlessly</h1>
                <p>Compare and learn programming languages with side-by-side examples and interactive lessons.</p>
                <div className="cta-buttons">
                    <Link to="/signup" className="btn primary">Get Started</Link>
                    <Link to="/login" className="btn secondary">Log In</Link>
                </div>
            </header>
            <section className="features">
                <div className="feature">
                    <h2>Scratch Mode</h2>
                    <p>Learn a language from the basics with interactive exercises.</p>
                </div>
                <div className="feature">
                    <h2>Comparison Mode</h2>
                    <p>Compare and learn side-by-side with a language you already know.</p>
                </div>
                <div className="feature">
                    <h2>Project-Based Learning</h2>
                    <p>Build real-world projects to solidify your understanding.</p>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
