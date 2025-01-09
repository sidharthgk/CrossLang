import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', formData);
    };

    return (
        <div className="auth-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="auth-form">
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
                <button type="submit" className="btn primary">Log In</button>
            </form>
            <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default LoginPage;
