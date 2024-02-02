import './styles.css';
import React, { useReducer } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignUp } from '../../hooks/useSignUp';
import { useNavigate, Link } from 'react-router-dom';
import { UserSignUpInterface } from 'src/interfaces/userInterfaces';

const initialState = {
  isLoading: false,
  error: null,
};

type Action =
  | { type: 'REQUEST' }
  | { type: 'SUCCESS' }
  | { type: 'FAILURE'; payload: string };

type State = {
  isLoading: boolean;
  error: string | null;
};


function reducer(state: State, action: Action) {
  switch (action.type) {
  case 'REQUEST':
    return { ...state, isLoading: true };
  case 'SUCCESS':
    return { ...state, isLoading: false };
  case 'FAILURE':
    return { ...state, isLoading: false, error: action.payload };
  default:
    throw new Error();
  }
}

export const SignUp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { signUp } = useSignUp();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<UserSignUpInterface>();

  const convertDate = (date: string) => {
    return new Date(date).toISOString();
  };

  const onSubmit: SubmitHandler<UserSignUpInterface> = async (data) => {
    dispatch({ type: 'REQUEST' });
    
    try {
      data.birthday = convertDate(data.birthday);
      const createdUser = await signUp(data);
      
      if (createdUser) {
        navigate('/profile', { state: createdUser });
      }

      dispatch({ type: 'SUCCESS' });

    } catch (error) {
      const message = (error instanceof Error) ? error.message : 'An unexpected error occurred';
      dispatch({ type: 'FAILURE', payload: message });

    }
  };

  return (
    <section className="signup-background">
      <div className="signup-container-align">
        <div className="signup-container">
          <div className="signup-container-content">
            <h1 className="signup-container-content__title">
              Create an account
            </h1>
            <form data-testid='signUp-form' className="signup-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="signup-form-section">
                <div>
                  <label htmlFor="name" className="signup-form-label">Name</label>
                  <input className="signup-form-input" data-testid="name" type="text" placeholder="First Name" {...register("name", { required: true })} />
                  {errors.name && <p className="signup-error-message">Name is required.</p>}
                </div>

                <div>
                  <label htmlFor="middleName" className="signup-form-label">Middle Name</label>
                  <input className="signup-form-input" type="text" placeholder="Middle Name" {...register("middleName")} />
                </div>
              </div>

              <div className="signup-form-section">
                <div>
                  <label htmlFor="surname" className="signup-form-label">Surname</label>
                  <input className="signup-form-input" data-testid="surname" type="text" placeholder="Surname" {...register("surname", { required: true })} />
                  {errors.surname && <p className="signup-error-message">Surname is required.</p>}
                </div>

                <div>
                  <label htmlFor="secondSurname" className="signup-form-label">Second Surname</label>
                  <input className="signup-form-input" type="text" placeholder="Second Surname" {...register("secondSurname")} />
                </div>
              </div>

              <div>
                <label htmlFor="birthday" className="signup-form-label">Your Birth Day</label>
                <input type="date" data-testid="birthday" placeholder='mm/dd/yyyy' className="signup-form-input" {...register("birthday", { required: true })} />
                {state.error && <p className="signup-error-message">{state.error}</p>}
              </div>

              <div>
                <label htmlFor="email" className="signup-form-label">Your email</label>
                <input type="email" data-testid="email" className="signup-form-input" placeholder="name@company.com" {...register("email", { required: true })} />
                {errors.email && <p className="signup-error-message">Email is required.</p>}
              </div>
              <div>
                <label htmlFor="password" className="signup-form-label">Password</label>
                <input type="password" data-testid="password" placeholder="••••••••" className="signup-form-input" {...register("password", { required: true })} />
                {errors.password && <p className="signup-error-message">Password is required.</p>}
              </div>

              <button type="submit" className="signup-form-button" disabled={state.isLoading} >Create an account</button>

              {state.error && <p className="signup-error-message">{state.error}</p>}

              <p className="signup-login-message">
                Already have an account? <Link to="/login" className="signup-login-message__link">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
