import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <Stars count={2} />
      <Stars count={0.9} />
      <Stars count={5.1} />
      <Stars count={'2'} />
      <Stars count={1.7} />
    </div>
  );
}

export default App;
