import './App.css';
import UserList from './UserList'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{textAlign:'center'}}>User Information</h1>
      <UserList /> {/* Render the UserList component */}
      </header>
    </div>
  );
}
export default App;
