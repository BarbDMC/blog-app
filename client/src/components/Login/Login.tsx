
import './styles.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLogin } from "src/hooks/useLogin";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, error, loading } = useLogin();

  const handleEMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loggedUser = await login(email, password);

    if (loggedUser) {
      navigate('/profile', { state: loggedUser });
    }
  }

  return (
    <section className="login-background">
      <div className="login-container-align">
        <div className="login-container">
            <div className="login-container-content">
                <h1 className="login-container-content__title">
                    Sign in to your account
                </h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="login-form-label">Your email</label>
                        <input type="email" name="email" id="email" className="login-form-input" placeholder="name@company.com" required={true} onChange={handleEMailChange} />
                    </div>
                    <div>
                        <label htmlFor="password" className="login-form-label">Password</label>
                        <input type="password" name="password" id="password" className="login-form-input" placeholder="••••••••" required={true} onChange={handlePasswordChange} />
                    </div>
                    <button type="submit" className="login-form-button" disabled={loading} >Sign in</button>
                    {error && <p className="login-error">{error}</p>}
                    <p className="login-signup-message">
                        Don’t have an account yet? <a href="#" className="login-signup-message__link">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
};
