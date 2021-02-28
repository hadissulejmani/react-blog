import Home from './Home';
import Navbar from './Navbar';

function App() {

  const title = 'Welcome to our blog';
  const likes = 50;
  const link = 'http://google.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
