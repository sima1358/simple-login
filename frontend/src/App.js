import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { UserList } from './components/UserList';
 
function App() {

  return (
    <div className='App'>
      <h1 className='title'>My FullStack Project</h1>
     <Login />
     <Register />
     <UserList />
 
    </div>
  );
} 

export default App;
