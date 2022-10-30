import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('submitted')

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch(err){
      setError(err)
    }
    setLoading(false);
  }

  return (
    <>
      <h2>SignUp</h2>
      {/* {currentUser.email} */}
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
        <label>
          Password Confirmation:
          <input
            type="password"
            ref={passwordConfirmRef}
          />
        </label>
        <button disabled={loading} type="submit">Sign up</button>
      </form>
      <div>
        Already have an account? <Link to='/login'>Log in</Link>
      </div>
    </>
  )
}

export default SignUp;