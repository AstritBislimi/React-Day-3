
import './App.css';
import SelectOrType from './components/Exercise6/SelectOrType';
import InteractiveDiv from './components/Exercise5/InteractiveDiv';
import ToDoList from './components/Exercise7/ToDoList';

function App() {
 


  return <div>
    <InteractiveDiv/>
    <SelectOrType items={["BMW", "Jaguar", "Porsche"]}/>
    <ToDoList/>
  </div>
}

export default App;
