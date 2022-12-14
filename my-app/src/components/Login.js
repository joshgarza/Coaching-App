import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch(err){
      setError(err)
    }
    setLoading(false);
  }

  return (
    <>
      <h2>Log in</h2>
      {error && console.log('error', {error})}
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input
            type="email"
            ref={emailRef}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            ref={passwordRef}
          />
        </label>
        <button disabled={loading} type="submit">Log in</button>
      </form>
      <div>
        <Link to='/forgot-password'>Forgot password?</Link>
      </div>
      <div>
        Need an account? <Link to='/signup'>Sign up</Link>
      </div>
    </>
  )
}

export default Login;