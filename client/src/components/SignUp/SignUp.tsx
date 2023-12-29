

import './styles.css';
import React from 'react';

export const SignUp: React.FC = () => {
  return (
    <section className="signup-background">
      <div className="signup-container-align">
          <div className="signup-container">
              <div className="signup-container-content">
                  <h1 className="signup-container-content__title">
                      Create and account
                  </h1>
                  <form className="signup-form">
                      <div className="signup-form-section">
                        <div>
                          <label htmlFor="name" className="signup-form-label">Name</label>
                          <input className="signup-form-input" type="text" placeholder="First Name" required={true}/>
                        </div>

                        <div>
                          <label htmlFor="middleName" className="signup-form-label">Middle Name</label>
                          <input className="signup-form-input" type="text" placeholder="Middle Name" />
                        </div>
                      </div>

                      <div className="signup-form-section">
                        <div>
                          <label htmlFor="surname" className="signup-form-label">Surname</label>
                          <input className="signup-form-input" type="text" placeholder="Surname" required={true} />
                        </div>

                        <div>
                          <label htmlFor="secondSurname" className="signup-form-label">Second Surname</label>
                          <input className="signup-form-input" type="text" placeholder="Second Surname" />
                        </div>
                      </div>

                      <div>
                          <label htmlFor="birthday" className="signup-form-label">Your Birth Day</label>
                          <input type="date" name="email" id="email" className="signup-form-input" placeholder="name@company.com" required={true} />
                      </div>

                      <div>
                          <label htmlFor="email" className="signup-form-label">Your email</label>
                          <input type="email" name="email" id="email" className="signup-form-input" placeholder="name@company.com" required={true} />
                      </div>
                      <div>
                          <label htmlFor="password" className="signup-form-label">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="signup-form-input" required={true} />
                      </div>

                      <button type="submit" className="signup-form-button">Create an account</button>
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