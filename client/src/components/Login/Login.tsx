
import './styles.css';
import React, { useState } from "react";
import { useLogin } from "src/hooks/useLogin";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, error, loading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(email, password);
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
                        <input type="email" name="email" id="email" className="login-form-input" placeholder="name@company.com" required={true} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="login-form-label">Password</label>
                        <input type="password" name="password" id="password" className="login-form-input" placeholder="••••••••" required={true} onChange={(e) => setPassword(e.target.value)} />
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

//focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-blue-500 dark:focus:border-blue-500