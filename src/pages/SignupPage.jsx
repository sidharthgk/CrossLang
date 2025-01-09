import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign Up:', formData);
    };

    return (
        <div className="auth-page">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="auth-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit" className="btn primary">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
    );
};

export default SignupPage;
