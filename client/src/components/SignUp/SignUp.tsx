

import './styles.css';
import React, { useState } from 'react';
import { useSignUp } from 'src/hooks/useSignUp';

export const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [secondSurname, setSecondSurname] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signUp, error, loading } = useSignUp();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleName(e.target.value);
  }

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  }

  const handleSecondSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondSurname(e.target.value);
  }

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = new Date(e.target.value).toISOString();
    setBirthday(inputDate);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      name: name,
      middleName: middleName,
      surname: surname,
      secondSurname: secondSurname,
      birthday: birthday,
      email: email,
      password: password,
    }

    await signUp(newUser);
  }

  return (
    <section className="signup-background">
      <div className="signup-container-align">
          <div className="signup-container">
              <div className="signup-container-content">
                  <h1 className="signup-container-content__title">
                      Create and account
                  </h1>
                  <form className="signup-form" onSubmit={handleSubmit}>
                      <div className="signup-form-section">
                        <div>
                          <label htmlFor="name" className="signup-form-label">Name</label>
                          <input className="signup-form-input" type="text" placeholder="First Name" required={true} onChange={handleNameChange}/>
                        </div>

                        <div>
                          <label htmlFor="middleName" className="signup-form-label">Middle Name</label>
                          <input className="signup-form-input" type="text" placeholder="Middle Name" onChange={handleMiddleNameChange} />
                        </div>
                      </div>

                      <div className="signup-form-section">
                        <div>
                          <label htmlFor="surname" className="signup-form-label">Surname</label>
                          <input className="signup-form-input" type="text" placeholder="Surname" required={true} onChange={handleSurnameChange} />
                        </div>

                        <div>
                          <label htmlFor="secondSurname" className="signup-form-label">Second Surname</label>
                          <input className="signup-form-input" type="text" placeholder="Second Surname" onChange={handleSecondSurnameChange} />
                        </div>
                      </div>

                      <div>
                          <label htmlFor="birthday" className="signup-form-label">Your Birth Day</label>
                          <input type="date" name="email" id="email" className="signup-form-input" placeholder="name@company.com" required={true} onChange={handleBirthdayChange} />
                      </div>

                      <div>
                          <label htmlFor="email" className="signup-form-label">Your email</label>
                          <input type="email" name="email" id="email" className="signup-form-input" placeholder="name@company.com" required={true} onChange={handleEmailChange} />
                      </div>
                      <div>
                          <label htmlFor="password" className="signup-form-label">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="signup-form-input" required={true} onChange={handlePasswordChange} />
                      </div>

                      <button type="submit" className="signup-form-button" disabled={loading}>Create an account</button>

                      {error && <p className="signup-error-message">{error}</p>}

                      <p className="signup-login-message">
                          Already have an account? <a href="#" className="signup-login-message__link">Login here</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}