import Login from './components/Login';
import SignUp from './components/Signup';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<Dashboard/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
