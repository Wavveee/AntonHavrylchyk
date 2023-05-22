import './App.css';
import { GreenForm } from './foms/entry-level/form-green'
import { PurpleForm } from './foms/average-level/form-purple';
import { BlueForm } from './foms/average-level/form-blue';

function App() {
  return (
    <div className="App">

      <div className='form-section green-form'>
        <GreenForm/>
      </div>

      <div className='form-section purple-form'>
        <PurpleForm/>
      </div>

      <div className='form-section blue-form'>
        <BlueForm/>
      </div>
    </div>
  );
}

export default App;
