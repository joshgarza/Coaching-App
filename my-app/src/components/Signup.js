import { useRef, useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() => {
    console.log(emailRef.current.value)
  }, [emailRef])

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
      {currentUser && JSON.stringify(currentUser)}
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
        <button disabled={loading} type="submit">Submit</button>
      </form>
      <div>
        Already have an account? Log In
      </div>
    </>
  )
}

export default SignUp;