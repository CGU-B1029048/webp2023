import logo from './logo.svg';
import './App.css';
import multibutton from './cgu_multibutton.js';

function App() {
  return (
    <div className="App">
      {multibutton(20)};
    </div>
  );
}

export default App;
