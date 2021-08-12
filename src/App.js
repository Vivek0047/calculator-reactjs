import './App.css';
import SimpleCalculator from './components/SimpleCalculator';
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <SimpleCalculator />
        </div>
      </div>
    </div>
  );
}

export default App;
