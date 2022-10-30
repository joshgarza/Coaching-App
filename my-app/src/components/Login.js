import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
      console.log('success')
    } catch(err){
      setError(err)
    }
    setLoading(false);
  }

  return (
    <>
      <h2>Log in</h2>
      {currentUser.email}
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
        Need an account? <Link to='/signup'>Sign up</Link>
      </div>
    </>
  )
}

export default Login;