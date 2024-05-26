import React from 'react';
import Login from '../components/login';

function LoginPage() {
    const handleLoginSuccess = () => {
        window.location.href = 'about.html';
    };

    return (
        <div>
            <Login onLogin={handleLoginSuccess} />
        </div>
    );
}

export default LoginPage;
