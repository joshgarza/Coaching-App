// import Login from './components/Login';
import SignUp from './components/Signup';
// import Dashboard from './components/Dashboard';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <SignUp/>
      </AuthProvider>
    </>
  );
}

export default App;
