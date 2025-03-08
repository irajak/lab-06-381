import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
            {/* Exercise 1 */}
            <h1>ENSF-381: Full Stack Web Development</h1>
            <p>React Components</p>
            <p>The current year is {currentYear}.</p>
            <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
        </div>
  );
}

export default App;
