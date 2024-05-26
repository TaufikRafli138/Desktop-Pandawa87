import React, { useState } from 'react';
import '../style.css';  // Impor file CSS

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        if (username === 'user' && password === 'pass') {
            onLogin();
        } else {
            setMessage('Login failed!');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <img src="assets/logo.png" alt="Login Background" className="login-image" />
                </div>
                <div className="login-form">
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />
                    <button onClick={handleLogin} className="login-button">Login</button>
                    {message && <p className="login-message">{message}</p>}
                </div>
            </div>
        </div>
    );
}

export default Login;
